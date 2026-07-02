interface SdcLogoProps {
  size?: number;
  variant?: "neon" | "sticker";
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Smiling Data Club — simple text logo.
 * "smiling" cyan, "data" pink, "club" purple. Major Mono Display.
 */
const SdcLogo = ({ size = 160, variant = "neon", className = "", style }: SdcLogoProps) => {
  const isSticker = variant === "sticker";
  const fontSize = Math.round(size * 0.18);
  const dotSize = Math.max(4, Math.round(size * 0.035));

  const wrapStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: Math.round(size * 0.06),
    padding: isSticker ? `${Math.round(size * 0.12)}px ${Math.round(size * 0.16)}px` : 0,
    background: isSticker ? "#f5f0ff" : "transparent",
    border: isSticker ? "2px solid #1a0b3d" : "none",
    borderRadius: isSticker ? Math.round(size * 0.18) : 0,
    fontFamily: "'Major Mono Display', 'Courier New', monospace",
    fontSize,
    letterSpacing: "0.08em",
    textTransform: "lowercase",
    lineHeight: 1,
    fontWeight: 400,
    ...style,
  };

  const dot = (color: string) => (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: dotSize,
        height: dotSize,
        borderRadius: "50%",
        background: color,
        boxShadow: `0 0 ${dotSize * 2}px ${color}`,
      }}
    />
  );

  return (
    <div
      role="img"
      aria-label="Smiling Data Club"
      className={className}
      style={wrapStyle}
    >
      <span style={{ color: "#00f0ff", textShadow: isSticker ? "none" : "0 0 12px rgba(0,240,255,0.55)" }}>smiling</span>
      {dot("#ffd700")}
      <span style={{ color: "#ff2d92", textShadow: isSticker ? "none" : "0 0 12px rgba(255,45,146,0.55)" }}>data</span>
      {dot("#ffd700")}
      <span style={{ color: "#b537f2", textShadow: isSticker ? "none" : "0 0 12px rgba(181,55,242,0.55)" }}>club</span>
    </div>
  );
};

export default SdcLogo;
