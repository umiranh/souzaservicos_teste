import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Phone, MapPin, Clock } from "lucide-react";
import { whatsappUrl, SITE } from "@/lib/site";

export function ContactForm() {
  const [form, setForm] = useState({ nome: "", empresa: "", mensagem: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Olá, gostaria de solicitar um orçamento.\n\nNome: ${form.nome}\nEmpresa: ${form.empresa}\n\nMensagem:\n${form.mensagem}`;
    window.open(whatsappUrl(msg), "_blank");
  }

  return (
    <section id="contato" className="section-y bg-background">
      <div className="container-x grid lg:grid-cols-5 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <div className="eyebrow mb-6">Fale Conosco</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
            Vamos transformar o seu <span className="text-accent">projeto em aço.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Preencha o formulário e envie diretamente pelo WhatsApp. Nossa equipe responde rapidamente.
          </p>
          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-accent/10 flex items-center justify-center">
                <Phone className="text-accent" size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Telefone</div>
                <a href={`tel:+55${SITE.whatsappNumber}`} className="font-semibold">{SITE.phone}</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-accent/10 flex items-center justify-center">
                <MapPin className="text-accent" size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Atendimento</div>
                <div className="font-semibold">Espírito Santo e região</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-accent/10 flex items-center justify-center">
                <Clock className="text-accent" size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Horário</div>
                <div className="font-semibold">Seg a Sex · 08h às 18h</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 bg-steel-900 text-white p-8 md:p-12 relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 diagonal-stripes" />
          <div className="space-y-6">
            <Field label="Nome" required>
              <input
                required
                maxLength={100}
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="input"
              />
            </Field>
            <Field label="Empresa">
              <input
                maxLength={100}
                value={form.empresa}
                onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                className="input"
              />
            </Field>
            <Field label="Mensagem" required>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="input resize-none"
              />
            </Field>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-ember-glow transition-colors"
            >
              <Send size={16} /> Enviar Solicitação
            </button>
            <p className="text-xs text-steel-400 text-center">
              Ao enviar, você será redirecionado ao WhatsApp com a mensagem pronta.
            </p>
          </div>
          <style>{`
            .input {
              width: 100%;
              background: transparent;
              border: 0;
              border-bottom: 1px solid rgba(255,255,255,0.2);
              padding: 0.75rem 0;
              color: white;
              outline: none;
              transition: border-color .2s;
              font-size: 1rem;
            }
            .input:focus { border-bottom-color: var(--ember); }
          `}</style>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-steel-400">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {children}
    </label>
  );
}
