import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const img = { url: "/media/work-welding.jpg" };

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={img.url} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-steel-900/85" />
      </div>
      <div className="container-x relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto text-balance leading-tight"
        >
          Seu projeto merece uma <span className="text-accent">estrutura à altura.</span>
        </motion.h2>
        <p className="mt-6 text-steel-200 text-lg max-w-2xl mx-auto">
          Conte para a nossa equipe o que precisa. Respondemos com agilidade e
          precisão técnica.
        </p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="#contato"
          className="mt-10 inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-ember-glow transition-all group"
        >
          Solicitar Orçamento
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}
