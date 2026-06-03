import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const img = { url: "/media/work-grinding.jpg" };

const items = [
  "Atendimento personalizado, do projeto à instalação",
  "Compromisso absoluto com prazos e cronogramas",
  "Equipe técnica especializada e certificada",
  "Materiais certificados e acabamento industrial",
];

export function About() {
  return (
    <section id="sobre" className="section-y bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img src={img.url} alt="Equipe Souza Serviços em execução" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 md:p-8 max-w-[220px] hidden md:block">
            <div className="text-5xl font-bold font-display leading-none">10</div>
            <div className="text-xs uppercase tracking-widest mt-2">Anos forjando confiança em aço</div>
          </div>
          <div className="absolute -top-4 -left-4 w-24 h-24 diagonal-stripes opacity-90 -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="eyebrow mb-6">A Empresa</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Experiência que <span className="text-accent">gera confiança.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A Souza Serviços nasceu para entregar estruturas metálicas que combinam
            engenharia precisa, durabilidade e acabamento impecável. Em uma década de
            mercado, consolidamos parcerias com construtoras, indústrias e clientes
            residenciais — sempre com a mesma exigência técnica.
          </p>
          <ul className="mt-8 space-y-4">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={22} />
                <span className="text-foreground/90">{it}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
