import { motion } from "framer-motion";
import { Award, Users, Zap, CalendarCheck, ShieldCheck, Settings2 } from "lucide-react";

const items = [
  { icon: Award, title: "10 anos de experiência", desc: "Década consolidada em projetos de pequeno, médio e grande porte." },
  { icon: Users, title: "Equipe qualificada", desc: "Soldadores, montadores e projetistas com formação técnica." },
  { icon: Zap, title: "Atendimento rápido", desc: "Visita técnica e orçamento ágil, sem burocracia." },
  { icon: CalendarCheck, title: "Compromisso com prazos", desc: "Cronograma transparente e entrega no prazo combinado." },
  { icon: ShieldCheck, title: "Qualidade garantida", desc: "Materiais certificados e padrões rigorosos de execução." },
  { icon: Settings2, title: "Soluções sob medida", desc: "Cada projeto é dimensionado para a sua necessidade real." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="section-y bg-secondary">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-6">Por que a Souza</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Padrão industrial em <span className="text-accent">cada detalhe.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-steel-200">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-background p-8 lg:p-10 group hover:bg-steel-900 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 group-hover:bg-accent flex items-center justify-center transition-colors">
                  <it.icon className="text-accent group-hover:text-accent-foreground" size={22} />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wide">{it.title}</h3>
              </div>
              <p className="mt-5 text-muted-foreground group-hover:text-steel-200 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
