interface SiriusLogoProps {
  variant?: "blue" | "white";
  className?: string;
}

const SiriusLogo = ({ variant = "blue", className = "" }: SiriusLogoProps) => {
  const color = variant === "blue" ? "hsl(213, 57%, 44%)" : "#FFFFFF";

  return (
    <svg
      viewBox="0 0 200 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SIRIUS GmbH document solutions"
    >
      <text
        x="0"
        y="30"
        fontFamily="Urbanist, sans-serif"
        fontWeight="700"
        fontSize="28"
        fill={color}
        letterSpacing="2"
      >
        SIRIUS
      </text>
      <text
        x="0"
        y="40"
        fontFamily="Urbanist, sans-serif"
        fontWeight="400"
        fontSize="8"
        fill={color}
        letterSpacing="1.5"
      >
        document solutions
      </text>
    </svg>
  );
};

export default SiriusLogo;
