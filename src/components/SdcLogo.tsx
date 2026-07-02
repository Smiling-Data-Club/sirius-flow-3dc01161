interface SdcLogoProps {
  size?: number;
  variant?: "neon" | "sticker";
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Smiling Data Club Logo
 * Isometric cube (purple top, cyan left, pink right with smiley)
 * plus arched "SMILING" (cyan) top and "DATA CLUB" (purple) bottom in neon outline.
 */
const SdcLogo = ({ size = 160, variant = "neon", className = "", style }: SdcLogoProps) => {
  const isSticker = variant === "sticker";

  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Smiling Data Club"
      role="img"
    >
      <defs>
        <filter id="sdc-glow-cyan" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="sdc-glow-pink" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="sdc-glow-purple" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Arched paths for the wordmark */}
        <path id="sdc-arc-top" d="M 40 130 A 82 82 0 0 1 200 130" fill="none" />
        <path id="sdc-arc-bottom" d="M 42 138 A 78 78 0 0 0 198 138" fill="none" />
      </defs>

      {isSticker && (
        <rect x="4" y="4" width="232" height="232" rx="36" ry="36" fill="#f5f0ff" stroke="#1a0b3d" strokeWidth="3" />
      )}

      {/* Top arched wordmark: SMILING (cyan neon outline) */}
      <text
        fontFamily="'Major Mono Display', 'Courier New', monospace"
        fontSize="26"
        fontWeight="400"
        letterSpacing="6"
        fill="none"
        stroke="#00f0ff"
        strokeWidth="1.4"
        filter="url(#sdc-glow-cyan)"
      >
        <textPath href="#sdc-arc-top" startOffset="50%" textAnchor="middle">
          SMILING
        </textPath>
      </text>

      {/* Isometric cube centered around (120, 130) */}
      <g transform="translate(120 130)">
        {/* Top face — dark purple */}
        <polygon
          points="0,-48 48,-24 0,0 -48,-24"
          fill="#2d0f5e"
          stroke="#b537f2"
          strokeWidth="1.4"
          filter="url(#sdc-glow-purple)"
        />
        {/* Left face — cyan */}
        <polygon
          points="-48,-24 0,0 0,48 -48,24"
          fill="#00f0ff"
          stroke="#00f0ff"
          strokeWidth="1.2"
          filter="url(#sdc-glow-cyan)"
        />
        {/* Right face — pink */}
        <polygon
          points="48,-24 0,0 0,48 48,24"
          fill="#ff2d92"
          stroke="#ff2d92"
          strokeWidth="1.2"
          filter="url(#sdc-glow-pink)"
        />

        {/* Smiley on right (pink) face — apply the same skew as the face:
            right face vector is (48,-24)→(0,48). Skew Y ≈ -26.5deg keeps it planar. */}
        <g transform="translate(24 12) skewY(-26.5)">
          {/* Eyes */}
          <rect x="-11" y="-10" width="4" height="7" rx="1" fill="#ffffff" />
          <rect x="6" y="-10" width="4" height="7" rx="1" fill="#ffffff" />
          {/* Smile */}
          <path d="M -12 4 Q 0 16 12 4" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
        </g>
      </g>

      {/* Bottom arched wordmark: DATA CLUB (purple neon outline) */}
      <text
        fontFamily="'Major Mono Display', 'Courier New', monospace"
        fontSize="22"
        fontWeight="400"
        letterSpacing="6"
        fill="none"
        stroke="#b537f2"
        strokeWidth="1.4"
        filter="url(#sdc-glow-purple)"
      >
        <textPath href="#sdc-arc-bottom" startOffset="50%" textAnchor="middle">
          DATA CLUB
        </textPath>
      </text>
    </svg>
  );
};

export default SdcLogo;
