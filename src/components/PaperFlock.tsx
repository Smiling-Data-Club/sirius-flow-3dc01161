import { useEffect, useRef } from "react";
import { createPaperFlock, type PaperShape } from "@/lib/paperFlock";

interface PaperFlockProps {
  shape?: PaperShape;
  className?: string;
}

/**
 * Schwarm aus Papierblättern als Hero-Hintergrund.
 * Läuft nur, solange er sichtbar ist; bei prefers-reduced-motion bleibt ein Standbild.
 */
const PaperFlock = ({ shape = "blatt", className = "" }: PaperFlockProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const flockRef = useRef<ReturnType<typeof createPaperFlock> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const flock = createPaperFlock(canvas, { shape, still });
    flockRef.current = flock;

    let visible = true;
    const sync = () => (visible && !document.hidden ? flock.start() : flock.stop());

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    io.observe(canvas);

    const ro = new ResizeObserver(() => flock.resize());
    ro.observe(canvas);

    document.addEventListener("visibilitychange", sync);
    sync();

    return () => {
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", sync);
      flock.destroy();
      flockRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    flockRef.current?.setShape(shape);
  }, [shape]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
};

export default PaperFlock;
