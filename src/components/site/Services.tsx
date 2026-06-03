import { motion } from "framer-motion";
import {
  Factory, Warehouse, Home, Layers3, DoorClosed, Fence,
  Minus, MoveUpRight, Shield, Wrench,
} from "lucide-react";

const services = [
  { icon: Factory, title: "Estruturas Metálicas", desc: "Cálculo, fabricação e montagem de estruturas para obras de qualquer porte." },
  { icon: Warehouse, title: "Galpões Industriais", desc: "Galpões em aço com vãos livres, projeto otimizado e prazo industrial." },
  { icon: Home, title: "Coberturas", desc: "Coberturas metálicas residenciais, comerciais e industriais." },
  { icon: Layers3, title: "Mezaninos", desc: "Mezaninos estruturais sob medida, ampliando sua área útil com segurança." },
  { icon: DoorClosed, title: "Portões", desc: "Portões basculantes, deslizantes e pivotantes com acabamento premium." },
  { icon: Fence, title: "Grades", desc: "Grades de proteção residenciais e industriais com design e robustez." },
  { icon: Minus, title: "Corrimãos", desc: "Corrimãos em aço e inox dentro das normas de segurança vigentes." },
  { icon: MoveUpRight, title: "Escadas Metálicas", desc: "Escadas marinheiro, retas, caracol e estruturais para qualquer aplicação." },
  { icon: Shield, title: "Fechamentos Industriais", desc: "Fechamentos perimetrais robustos para indústrias e plantas operacionais." },
  { icon: Wrench, title: "Projetos Sob Medida", desc: "Da concepção à entrega: soluções customizadas para o seu projeto." },
];

export function Services() {
  return (
    <section id="servicos" className="section-y bg-steel-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="container-x relative">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-6">O que fazemos</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Soluções completas em <span className="text-accent">serralheria industrial.</span>
          </h2>
          <p className="mt-6 text-steel-200 text-lg">
            Da grade de proteção ao galpão industrial — entregamos com o mesmo padrão
            de engenharia, prazo e acabamento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-white/10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
              className="group bg-steel-900 p-8 hover:bg-steel-800 transition-colors relative cursor-default"
            >
              <s.icon className="text-accent" size={32} strokeWidth={1.5} />
              <h3 className="mt-6 text-lg font-bold uppercase tracking-wide">{s.title}</h3>
              <p className="mt-3 text-sm text-steel-200 leading-relaxed">{s.desc}</p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
