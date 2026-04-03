const papers = [
  { left: "5%", size: "w-[45px] h-[60px]", delay: "0s", duration: "12s" },
  { left: "15%", size: "w-[35px] h-[48px]", delay: "2s", duration: "14s" },
  { left: "28%", size: "w-[50px] h-[66px]", delay: "5s", duration: "11s" },
  { left: "40%", size: "w-[30px] h-[42px]", delay: "1s", duration: "16s" },
  { left: "55%", size: "w-[42px] h-[56px]", delay: "4s", duration: "13s" },
  { left: "65%", size: "w-[38px] h-[52px]", delay: "7s", duration: "15s" },
  { left: "78%", size: "w-[48px] h-[64px]", delay: "3s", duration: "12s" },
  { left: "88%", size: "w-[32px] h-[44px]", delay: "6s", duration: "14s" },
  { left: "10%", size: "w-[36px] h-[50px]", delay: "8s", duration: "13s" },
  { left: "50%", size: "w-[40px] h-[54px]", delay: "9s", duration: "15s" },
];

const FloatingPapers = () => (
  <div
    className="absolute inset-x-0 top-0 h-screen pointer-events-none overflow-hidden"
    style={{ zIndex: 1 }}
    aria-hidden="true"
  >
    {papers.map((p, i) => (
      <div
        key={i}
        className={`paper-deco ${p.size} animate-paper-rain`}
        style={{
          left: p.left,
          top: "-80px",
          animationDelay: p.delay,
          animationDuration: p.duration,
        }}
      />
    ))}
  </div>
);

export default FloatingPapers;
