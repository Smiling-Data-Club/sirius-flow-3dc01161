const papers = [
  { size: "w-[40px] h-[54px]", delay: "0s", orbit: "animate-tornado-orbit-1", opacity: "opacity-80" },
  { size: "w-[32px] h-[44px]", delay: "1.5s", orbit: "animate-tornado-orbit-2", opacity: "opacity-70" },
  { size: "w-[48px] h-[64px]", delay: "3s", orbit: "animate-tornado-orbit-3", opacity: "opacity-75" },
  { size: "w-[28px] h-[38px]", delay: "4.5s", orbit: "animate-tornado-orbit-1", opacity: "opacity-65" },
  { size: "w-[36px] h-[50px]", delay: "6s", orbit: "animate-tornado-orbit-2", opacity: "opacity-70" },
  { size: "w-[30px] h-[42px]", delay: "7.5s", orbit: "animate-tornado-orbit-3", opacity: "opacity-75" },
];

const DocumentTornado = () => (
  <div
    className="absolute left-1/2 top-[10%] -translate-x-1/2 w-[280px] h-[280px] pointer-events-none"
    style={{ zIndex: 1 }}
    aria-hidden="true"
  >
    {/* Subtle vortex glow */}
    <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />

    {papers.map((p, i) => (
      <div
        key={i}
        className={`absolute top-1/2 left-1/2 ${p.orbit} ${p.opacity}`}
        style={{ animationDelay: p.delay }}
      >
        <div className={`paper-deco-dark ${p.size}`} />
      </div>
    ))}
  </div>
);

export default DocumentTornado;
