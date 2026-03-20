import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

const SectionReveal = ({ children, className, stagger }: SectionRevealProps) => {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className={cn("reveal", stagger && "reveal-stagger", className)}
    >
      {children}
    </div>
  );
};

export default SectionReveal;
