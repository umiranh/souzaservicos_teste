import { useEffect, useState } from "react";
const logoFull = { url: "/media/logo-full.png" };
import { Menu, X } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#numeros", label: "Números" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-steel-900/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoFull.url} alt="Souza Serviços" className="h-12 w-auto brightness-0 invert" />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-widest text-steel-200 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappUrl("Olá, gostaria de solicitar um orçamento.")}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-ember-glow transition-colors"
        >
          Orçamento
        </a>
        <button
          aria-label="Menu"
          className="lg:hidden text-white"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-steel-900 border-t border-white/5">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-widest text-steel-200 hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappUrl("Olá, gostaria de solicitar um orçamento.")}
              target="_blank"
              rel="noreferrer"
              className="bg-accent text-accent-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest text-center"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
