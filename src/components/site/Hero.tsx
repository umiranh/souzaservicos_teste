import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
const hero = { url: "/media/work-welding.jpg" };
import { whatsappUrl, SITE } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden bg-steel-900">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={hero.url}
          alt="Serralheiro executando solda em estrutura metálica"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-900 via-steel-900/70 to-steel-900/30" />
        <div className="absolute inset-0 grid-lines opacity-50" />
      </motion.div>

      <div className="container-x relative pb-24 pt-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-accent mb-6"
          >
            Serralheria & Estruturas Metálicas · Desde 2015
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] text-balance"
          >
            {SITE.years} anos transformando projetos em{" "}
            <span className="text-accent">estruturas de confiança.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-steel-200 max-w-2xl"
          >
            Soluções em serralheria para residências, comércios, indústrias e grandes
            obras — com engenharia, prazo e acabamento de nível industrial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-ember-glow transition-all"
            >
              Solicitar Orçamento
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={whatsappUrl("Olá, gostaria de falar com a Souza Serviços.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-white/20 text-white px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              <MessageCircle size={18} /> Falar no WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Bottom metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-white/10 pt-8 gap-y-6"
        >
          {[
            ["Industrial", "Padrão de execução"],
            ["Sob medida", "Cada projeto"],
            ["ES/MG", "Atendimento regional"],
            ["24h", "Resposta ao cliente"],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="text-3xl md:text-4xl font-bold text-white font-display">{v}</div>
              <div className="text-xs uppercase tracking-widest text-steel-400 mt-1">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
