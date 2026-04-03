const papers = [
  { size: "w-[30px] h-[40px]", delay: "0s", orbit: "animate-tornado-orbit-1", opacity: "opacity-40" },
  { size: "w-[24px] h-[32px]", delay: "1.5s", orbit: "animate-tornado-orbit-2", opacity: "opacity-30" },
  { size: "w-[36px] h-[48px]", delay: "3s", orbit: "animate-tornado-orbit-3", opacity: "opacity-35" },
  { size: "w-[20px] h-[28px]", delay: "4.5s", orbit: "animate-tornado-orbit-1", opacity: "opacity-25" },
  { size: "w-[28px] h-[38px]", delay: "6s", orbit: "animate-tornado-orbit-2", opacity: "opacity-30" },
  { size: "w-[22px] h-[30px]", delay: "7.5s", orbit: "animate-tornado-orbit-3", opacity: "opacity-35" },
];

const DocumentTornado = () => (
  <div
    className="absolute left-1/2 top-[10%] -translate-x-1/2 w-[200px] h-[200px] pointer-events-none"
    style={{ zIndex: 1 }}
    aria-hidden="true"
  >
    {/* Subtle vortex glow */}
    <div className="absolute inset-0 rounded-full bg-primary/5 blur-2xl" />

    {papers.map((p, i) => (
      <div
        key={i}
        className={`absolute top-1/2 left-1/2 ${p.orbit} ${p.opacity}`}
        style={{ animationDelay: p.delay }}
      >
        <div className={`paper-deco ${p.size}`} />
      </div>
    ))}
  </div>
);

export default DocumentTornado;
