import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { VideoSection } from "@/components/site/VideoSection";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Differentials } from "@/components/site/Differentials";
import { Stats } from "@/components/site/Stats";
import { CTASection } from "@/components/site/CTASection";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Souza Serviços — Serralheria e Estruturas Metálicas | 10 anos" },
      {
        name: "description",
        content:
          "Serralheria industrial com 10 anos de mercado. Estruturas metálicas, galpões, coberturas, mezaninos, portões e projetos sob medida. Solicite seu orçamento.",
      },
      { property: "og:title", content: "Souza Serviços — Serralheria e Estruturas Metálicas" },
      {
        property: "og:description",
        content:
          "10 anos transformando projetos em estruturas de confiança. Soluções em serralheria para residências, comércios, indústrias e grandes obras.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Souza Serviços",
          description:
            "Serralheria e estruturas metálicas. Estruturas, galpões, coberturas, mezaninos, portões e projetos sob medida.",
          telephone: "+5527995149942",
          areaServed: "Espírito Santo",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <VideoSection />
      <About />
      <Services />
      <Differentials />
      <Stats />
      <CTASection />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
