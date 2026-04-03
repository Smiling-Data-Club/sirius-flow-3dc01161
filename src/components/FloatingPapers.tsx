const FloatingPaper = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={`paper-deco animate-float-paper ${className ?? ""}`}
    style={style}
    aria-hidden="true"
  />
);

const FloatingPapers = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
    <FloatingPaper
      className="hidden md:block w-[120px] h-[160px] opacity-90"
      style={{ top: "8%", left: "8%", "--rotate": "-4deg" } as React.CSSProperties}
    />
    <FloatingPaper
      className="hidden md:block w-[100px] h-[140px] opacity-90"
      style={{ top: "20%", left: "75%", "--rotate": "6deg", animationDelay: "3s" } as React.CSSProperties}
    />
    <FloatingPaper
      className="hidden lg:block w-[90px] h-[120px] opacity-90"
      style={{ top: "45%", left: "88%", "--rotate": "-8deg", animationDelay: "6s" } as React.CSSProperties}
    />
    <FloatingPaper
      className="hidden md:block w-[110px] h-[150px] opacity-90"
      style={{ top: "55%", left: "3%", "--rotate": "5deg", animationDelay: "2s" } as React.CSSProperties}
    />
    <FloatingPaper
      className="hidden lg:block w-[80px] h-[110px] opacity-90"
      style={{ top: "75%", left: "45%", "--rotate": "-3deg", animationDelay: "5s" } as React.CSSProperties}
    />
  </div>
);

export default FloatingPapers;
