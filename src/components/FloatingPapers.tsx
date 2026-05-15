import { useEffect, useRef } from "react";

const papers = [
  { left: "5%", size: "w-[45px] h-[60px]", delay: "0s", duration: "12s", parallax: 0.18 },
  { left: "15%", size: "w-[35px] h-[48px]", delay: "2s", duration: "14s", parallax: 0.10 },
  { left: "28%", size: "w-[50px] h-[66px]", delay: "5s", duration: "11s", parallax: 0.22 },
  { left: "40%", size: "w-[30px] h-[42px]", delay: "1s", duration: "16s", parallax: 0.08 },
  { left: "55%", size: "w-[42px] h-[56px]", delay: "4s", duration: "13s", parallax: 0.16 },
  { left: "65%", size: "w-[38px] h-[52px]", delay: "7s", duration: "15s", parallax: 0.12 },
  { left: "78%", size: "w-[48px] h-[64px]", delay: "3s", duration: "12s", parallax: 0.20 },
  { left: "88%", size: "w-[32px] h-[44px]", delay: "6s", duration: "14s", parallax: 0.09 },
  { left: "10%", size: "w-[36px] h-[50px]", delay: "8s", duration: "13s", parallax: 0.14 },
  { left: "50%", size: "w-[40px] h-[54px]", delay: "9s", duration: "15s", parallax: 0.11 },
];

const FloatingPapers = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = containerRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.setProperty("--scroll-y", `${y}px`);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-x-0 top-0 h-screen overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {papers.map((p, i) => (
        <div
          key={i}
          className="paper-parallax absolute pointer-events-auto"
          style={{
            left: p.left,
            top: "-80px",
            ["--parallax" as any]: p.parallax,
          }}
        >
          <div
            className={`paper-deco paper-interactive ${p.size} animate-paper-rain`}
            style={{
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingPapers;
