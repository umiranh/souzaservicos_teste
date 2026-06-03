const logo = { url: "/media/logo-full.png" };
import { SITE, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-steel-900 text-steel-200 border-t border-white/5">
      <div className="container-x py-16 grid md:grid-cols-3 gap-10">
        <div>
          <img src={logo.url} alt="Souza Serviços" className="h-16 w-auto brightness-0 invert" />
          <p className="mt-5 text-sm text-steel-400 max-w-xs">
            Serralheria e estruturas metálicas com padrão industrial — forjando
            projetos em aço com engenharia, prazo e acabamento.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-accent mb-4">Navegação</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-accent">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-accent">Serviços</a></li>
            <li><a href="#diferenciais" className="hover:text-accent">Diferenciais</a></li>
            <li><a href="#contato" className="hover:text-accent">Contato</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-accent mb-4">Contato</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={whatsappUrl("Olá! Vim pelo site da Souza Serviços.")}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                {SITE.phone}
              </a>
            </li>
            <li>Atendimento: ES e região</li>
            <li>Seg–Sex · 08h às 18h</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-x py-6 text-xs text-steel-400 text-center md:text-left">
          © {new Date().getFullYear()} Souza Serviços. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
