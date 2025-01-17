import type { SVGProps } from 'react';

export const Bus: React.FC<SVGProps<SVGSVGElement> & { branded?: boolean }> = ({ branded = true, ...props }) => {
    /* we could be more fancy here */
    const defaultColor = {
        rim: branded ? '#506C7F' : '#506C7F',
        body: branded ? '#cebef9' : 'currentColor',
        rearWindow: branded ? '#B4CCB9' : '#B4CCB9',
        windShield: branded ? '#F9EBB2' : '#F9EBB2',
        border: branded ? '#2D527C' : '#2D527C',
        light: branded ? '#F9EBB2' : '#F9EBB2',
    };
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width="1em"
            height="1em"
            viewBox="0 0 64 64"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <g>
                <g>
                    <rect x="10" y="56" fill={defaultColor.rim} width="6" height="6" />
                    <rect x="48" y="56" fill={defaultColor.rim} width="6" height="6" />
                </g>
                <path
                    fill={defaultColor.body}
                    d="M58,52c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2V10c0-4.418,3.582-8,8-8h36c4.418,0,8,3.582,8,8V52z"
                />
                <g>
                    <path fill={defaultColor.rearWindow} d="M2,28c0,1.104,0.896,2,2,2V19.999H2V28z" />
                    <path fill={defaultColor.rearWindow} d="M60,19.999V30c1.104,0,2-0.896,2-2v-8.001H60z" />
                </g>
                <rect x="10" y="12" fill={defaultColor.windShield} width="44" height="24" />

                <path
                    fill={defaultColor.border}
                    d="M51,42c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S53.209,42,51,42z M51,48c-1.104,0-2-0.896-2-2
		s0.896-2,2-2s2,0.896,2,2S52.104,48,51,48z"
                />
                <path
                    fill={defaultColor.border}
                    d="M13,42c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S15.209,42,13,42z M13,48c-1.104,0-2-0.896-2-2
		s0.896-2,2-2s2,0.896,2,2S14.104,48,13,48z"
                />
                <path
                    fill={defaultColor.border}
                    d="M28,7h8c0.553,0,1-0.447,1-1s-0.447-1-1-1h-8c-0.553,0-1,0.447-1,1S27.447,7,28,7z"
                />
                <path
                    fill={defaultColor.border}
                    d="M50.293,17.708c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293
		c0.391-0.391,0.391-1.023,0-1.414l-2-2c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L50.293,17.708z"
                />
                <path
                    fill={defaultColor.border}
                    d="M50.293,22.707C50.488,22.902,50.744,23,51,23s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
		l-7-7c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L50.293,22.707z"
                />
                <path
                    fill={defaultColor.border}
                    d="M9,10c-0.553,0-1,0.447-1,1v26c0,0.553,0.447,1,1,1h46c0.553,0,1-0.447,1-1V11c0-0.553-0.447-1-1-1H9z
		 M18,36c0-2.209,1.791-4,4-4s4,1.791,4,4H18z M31,36h-3c0-3.314-2.686-6-6-6s-6,2.686-6,6h-6V12h21V36z M54,36H33V12h21V36z"
                />
                <path
                    fill={defaultColor.border}
                    d="M43,41H21c-0.553,0-1,0.447-1,1v8c0,0.553,0.447,1,1,1h22c0.553,0,1-0.447,1-1v-8
		C44,41.447,43.553,41,43,41z M42,49H22v-6h20V49z"
                />
                <path
                    fill={defaultColor.border}
                    d="M64,18.999c0-0.553-0.447-1-1-1h-3V10c0-5.523-4.478-10-10-10H14C8.477,0,4,4.478,4,10v7.999H1
		c-0.553,0-1,0.447-1,1v9L0.003,28H0c0,2.209,1.791,4,4,4v20c0,2.211,1.789,4,4,4v7c0,0.553,0.447,1,1,1h8c0.553,0,1-0.447,1-1v-7
		h28v7c0,0.553,0.447,1,1,1h8c0.553,0,1-0.447,1-1v-7c2.211,0,4-1.789,4-4V32c2.209,0,4-1.791,4-4h-0.003L64,27.999V18.999z M2,28
		v-8.001h2V30C2.896,30,2,29.104,2,28z M16,62h-6v-6h6V62z M54,62h-6v-6h6V62z M58,52c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2
		V10c0-4.418,3.582-8,8-8h36c4.418,0,8,3.582,8,8V52z M62,28c0,1.104-0.896,2-2,2V19.999h2V28z"
                />
                <rect x="22" y="43" fill="#B4CCB9" width="20" height="6" />
                <g>
                    <circle fill={defaultColor.light} cx="51" cy="46" r="2" />
                    <circle fill={defaultColor.light} cx="13" cy="46" r="2" />
                </g>
            </g>
        </svg>
    );
};
