import React from 'react';

interface GooglePlayBadgeProps {
    url: string;
    small?: boolean;
}

/**
 * Official-style Google Play badge using pure SVG.
 * No external image dependency — renders perfectly everywhere.
 */
const GooglePlayBadge: React.FC<GooglePlayBadgeProps> = ({ url, small = false }) => {
    const height = small ? 40 : 52;
    const width = small ? 135 : 176;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-105"
            aria-label="Get it on Google Play"
            id="google-play-badge"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox="0 0 176 52"
                fill="none"
                role="img"
                aria-label="Get it on Google Play"
            >
                {/* Background */}
                <rect width="176" height="52" rx="8" fill="#000" />
                <rect x="0.5" y="0.5" width="175" height="51" rx="7.5" stroke="#A6A6A6" strokeOpacity="0.4" />

                {/* Play Triangle */}
                <g transform="translate(14, 11)">
                    {/* Google Play triangle icon */}
                    <path d="M0 2.5C0 1.5 0.6 0.9 1.5 1.4L22.5 13.5C23.5 14.1 23.5 15.9 22.5 16.5L1.5 28.6C0.6 29.1 0 28.5 0 27.5V2.5Z" fill="url(#playGrad)" />
                    <defs>
                        <linearGradient id="playGrad" x1="0" y1="2" x2="23" y2="15" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00C3FF" />
                            <stop offset="0.3" stopColor="#00E396" />
                            <stop offset="0.6" stopColor="#FFD000" />
                            <stop offset="1" stopColor="#FF3A44" />
                        </linearGradient>
                    </defs>
                </g>

                {/* Text */}
                <text x="46" y="19" fill="#FFFFFF" fontFamily="Inter, system-ui, sans-serif" fontSize="8" fontWeight="400" letterSpacing="0.5">
                    GET IT ON
                </text>
                <text x="46" y="37" fill="#FFFFFF" fontFamily="Inter, system-ui, sans-serif" fontSize="16" fontWeight="700" letterSpacing="0.3">
                    Google Play
                </text>
            </svg>
        </a>
    );
};

export default GooglePlayBadge;
