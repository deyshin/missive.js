import { Stamp } from '../core/envelope.js';
import { GenericMiddleware } from '../core/middleware.js';
import { sleeperFactory } from '../utils/sleeper.js';
import { RetryConfiguration } from '../utils/types.js';

type Options = RetryConfiguration;

export type RetriedStamp = Stamp<{ attempt: number; errorMessage: string }, 'missive:retried'>;

export function createRetryerMiddleware({
    maxAttempts = 3,
    waitingAlgorithm = 'exponential',
    multiplier = 1.5,
    jitter = 0.5,
}: Options = {}): GenericMiddleware {
    const sleeper = sleeperFactory({ waitingAlgorithm, multiplier, jitter });

    return async (envelope, next) => {
        let attempt = 1;
        sleeper.reset();
        let lastError: unknown | null = null;
        while (attempt <= maxAttempts) {
            try {
                const initialErrorStampCount = envelope.stamps.filter((stamp) => stamp.type === 'error').length;
                await next();
                const errorStampCount = envelope.stamps.filter((stamp) => stamp.type === 'error').length;
                const newErrorStampCount = errorStampCount - initialErrorStampCount;
                if (newErrorStampCount === 0) {
                    // no new error, we are goog to go
                    return;
                }
                envelope.addStamp<RetriedStamp>('missive:retried', {
                    attempt,
                    errorMessage: `New error stamp count: ${newErrorStampCount}`,
                });
            } catch (error) {
                lastError = error;
                envelope.addStamp<RetriedStamp>('missive:retried', {
                    attempt,
                    errorMessage: error instanceof Error ? error.message : String(error),
                });
            }
            attempt++;
            if (attempt > maxAttempts) {
                // if we have an error, we throw it
                if (lastError !== null) {
                    throw lastError;
                }
                // if we don't have an error because the retries we based on an error stamp count, we just return
                return;
            }
            await sleeper.wait();
        }
    };
}
