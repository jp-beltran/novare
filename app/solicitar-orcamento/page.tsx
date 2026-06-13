import Image from "next/image";
import { BriefingForm } from "@/components/briefing-form";
import { PageShell } from "@/components/site-shell";
import { Icon } from "@/components/ui";

const office =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAKjgTeuHm_u0OE-t1qverevlXOA_kzTBY2WrDoGYeCPtaiC59LhtAcnRZ26YE6D2P2ESOizBF0gYGkCYBKge900HbRua7xW55vBf_7TUo40Glh8RcJT9mA4oXhkekq6LggWhXy9NgZQfvKn3Xs4vjXu6ybV43e3eWDK2hqwXayX243zgVzVEal0DQ_K0ekdjp4thE9pUXrnhosrrlIOrk9n_wX23zw4-fEPBUynmqnCGOJRzwDoaRLR5dRQJ1v9VK2zro_p7sYa5c";
const cards = [
  [
    "timer",
    "Resposta em até 24h",
    "Nossa equipe analisa seu briefing rapidamente para agilizar o início do projeto.",
  ],
  [
    "description",
    "Orçamento personalizado",
    "Nada de pacotes genéricos. Precificamos de acordo com a complexidade real do seu negócio.",
  ],
  [
    "handshake",
    "Sem compromisso",
    "O envio deste formulário é apenas o primeiro passo para uma conversa consultiva.",
  ],
] as const;

export default function SolicitarOrcamento() {
  return (
    <PageShell>
      <header className="mx-auto max-w-content px-6 pb-12 pt-44">
        <div className="max-w-3xl">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-secondary">
            Briefing Estratégico
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-7xl">
            Me conte sobre sua página
          </h1>
          <p className="text-lg">
            Transformamos sua visão em uma interface de alta performance.
            Preencha os detalhes abaixo para receber uma proposta personalizada.
          </p>
        </div>
      </header>
      <div className="mx-auto grid max-w-content gap-12 px-6 pb-section lg:grid-cols-12 lg:gap-20">
        <aside className="order-2 lg:order-1 lg:col-span-4">
          <div className="grid gap-6 lg:sticky lg:top-28">
            {cards.map(([icon, title, text]) => (
              <article
                className="rounded-lg border border-outline-variant bg-surface-container p-6 transition hover:border-primary"
                key={title}
              >
                <h2 className="mb-2 flex items-center gap-2 text-2xl font-bold">
                  <Icon>{icon}</Icon>
                  {title}
                </h2>
                <p className="mb-0">{text}</p>
              </article>
            ))}
            <div className="relative h-48 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover opacity-40"
                src={office}
                alt="Escritório Novare"
                width={600}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
          </div>
        </aside>
        <section
          className="order-1 lg:order-2 lg:col-span-8"
          aria-label="Formulário de briefing"
        >
          <BriefingForm />
        </section>
      </div>
    </PageShell>
  );
}
