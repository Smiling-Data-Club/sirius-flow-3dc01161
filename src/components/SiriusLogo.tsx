import logoBlau from "@/assets/sirius_logo_blau.svg";
import logoWeiss from "@/assets/sirius_logo_weiss.svg";

interface SiriusLogoProps {
  variant?: "blue" | "white";
  className?: string;
}

const SiriusLogo = ({ variant = "blue", className = "" }: SiriusLogoProps) => {
  const src = variant === "blue" ? logoBlau : logoWeiss;

  return (
    <img
      src={src}
      alt="SIRIUS GmbH document solutions"
      className={className}
    />
  );
};

export default SiriusLogo;
