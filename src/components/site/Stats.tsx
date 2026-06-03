import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 100, suffix: "+", label: "Projetos entregues" },
  { value: 50, suffix: "+", label: "Clientes atendidos" },
  { value: 100, suffix: "%", label: "Comprometimento" },
  { value: 24, suffix: "h", label: "Resposta ao cliente" },
];

export function Stats() {
  return (
    <section id="numeros" className="relative py-24 bg-steel-900 text-white overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="container-x relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left border-l-2 border-accent pl-6">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs md:text-sm uppercase tracking-widest text-steel-200">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
