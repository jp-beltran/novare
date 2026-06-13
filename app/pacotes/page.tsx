import { PageShell } from "@/components/site-shell";
import { ButtonLink, CheckList, Icon, SectionHeading } from "@/components/ui";

const plans = [
  {
    tag: "Essencial",
    name: "Fast Launch",
    price: "R$ 2.4",
    suffix: "mil /único",
    featured: false,
    items: [
      "Landing Page (Até 4 seções)",
      "Integração WhatsApp",
      "SEO Básico (Meta tags)",
      "Layout Responsivo Premium",
    ],
  },
  {
    tag: "Profissional",
    name: "Growth Machine",
    price: "R$ 4.8",
    suffix: "mil /único",
    featured: true,
    items: [
      "LP Completa (Seções ilimitadas)",
      "Gestão de Leads (CRM Sync)",
      "Copywriting Persuasivo",
      "Otimização de Performance (Vercel)",
      "Google Analytics & Pixel Meta",
    ],
  },
  {
    tag: "Premium",
    name: "Authority Brand",
    price: "Sob",
    suffix: "consulta",
    featured: false,
    items: [
      "Ecossistema Digital (Multipage)",
      "Design System Exclusivo",
      "Integrações de API Sob Medida",
      "Suporte Dedicado 24/7",
    ],
  },
] as const;
const rows = [
  ["Número de Seções", "Até 4", "Ilimitadas", "Customizado"],
  ["Botão WhatsApp", "✓", "✓", "✓"],
  ["SEO Avançado", "—", "✓", "✓"],
  [
    "Hospedagem Recomendada",
    "Hostinger",
    "Vercel (Ultra Speed)",
    "Infra Dedicada",
  ],
  ["Entrega do Código", "—", "✓", "✓"],
  ["Mockup 3D", "—", "—", "✓"],
] as const;
const infra = [
  [
    "cloud",
    "Hostinger",
    "Ideal para orçamentos enxutos. Oferece bom custo-benefício e painel intuitivo.",
    "SPEED: 70/100",
  ],
  [
    "bolt",
    "Vercel Edge",
    "Nossa recomendação para performance máxima via CDN Global.",
    "SPEED: 99/100",
  ],
  [
    "code",
    "Código Fonte",
    "Independência total para hospedar em qualquer servidor Linux ou AWS.",
    "TOTAL FREEDOM",
  ],
] as const;

export default function Pacotes() {
  return (
    <PageShell>
      <section className="hero-glow relative overflow-hidden px-6 pb-section pt-44 text-center">
        <div className="relative z-10 mx-auto max-w-content">
          <span className="mb-6 inline-block rounded-full bg-primary/10 px-6 py-1 text-sm font-semibold uppercase tracking-widest text-primary">
            Pricing &amp; Strategy
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-7xl">
            Escolha o pacote ideal para o seu momento
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg">
            Estruturas de alta performance pensadas para converter visitantes em
            clientes reais.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="#plans" variant="purple">
              Ver Planos
            </ButtonLink>
            <ButtonLink href="#comparison" variant="outline">
              Comparar Detalhes
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="bg-surface-lowest py-section" id="plans">
        <div className="mx-auto grid max-w-content gap-6 px-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              className={`relative flex flex-col rounded-lg bg-surface-container/70 p-8 md:p-12 ${plan.featured ? "border-2 border-primary bg-surface-high shadow-glow lg:scale-105" : "border border-outline-variant"}`}
              key={plan.name}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-6 py-2 text-xs font-bold uppercase text-[#23005c]">
                  Mais Popular
                </span>
              )}
              <span
                className={`mb-3 text-sm font-semibold uppercase tracking-wider ${plan.featured ? "text-primary" : "text-on-surface-variant"}`}
              >
                {plan.tag}
              </span>
              <h2 className="mb-2 text-2xl font-bold">{plan.name}</h2>
              <div
                className={`mb-10 font-display text-5xl font-bold ${plan.featured ? "text-primary" : ""}`}
              >
                {plan.price}{" "}
                <small className="font-sans text-base font-normal text-on-surface-variant">
                  {plan.suffix}
                </small>
              </div>
              <div className="mb-12 flex-1">
                <CheckList items={plan.items} />
              </div>
              <ButtonLink
                href="/solicitar-orcamento"
                variant={plan.featured ? "purple" : "outline"}
              >
                {plan.featured ? "Escolher Profissional" : "Começar Agora"}
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>
      <section className="py-section" id="comparison">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            title="Anatomia do Projeto"
            text="Compare cada detalhe técnico que compõe sua entrega."
          />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="p-6 text-left">Característica</th>
                  <th className="p-6">Essencial</th>
                  <th className="p-6 text-primary">Profissional</th>
                  <th className="p-6">Premium</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    className="border-b border-outline-variant/40"
                    key={row[0]}
                  >
                    {row.map((cell, i) => (
                      <td
                        className={`p-6 ${i === 0 ? "text-left" : "text-center"} ${i === 2 ? "font-semibold text-primary" : ""} ${cell === "✓" ? "text-secondary" : ""}`}
                        key={i}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="bg-surface-low py-section">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            title="Entenda a Infraestrutura"
            text={'Onde seu site "mora" define o quão rápido ele vende.'}
          />
          <div className="grid gap-8 md:grid-cols-3">
            {infra.map(([icon, title, text, speed], i) => (
              <article
                className={`rounded-lg bg-background p-10 text-center ${i === 1 ? "border-2 border-primary" : "border border-outline-variant"}`}
                key={title}
              >
                <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <Icon>{icon}</Icon>
                </div>
                <h3 className="mb-3 text-2xl font-bold">{title}</h3>
                <p>{text}</p>
                <div
                  className={`mt-6 border-t border-outline-variant/50 pt-6 text-sm font-semibold ${i === 1 ? "text-secondary" : "text-primary"}`}
                >
                  {speed}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-section">
        <div className="mx-auto max-w-content px-6">
          <div className="rounded-[32px] border border-outline-variant bg-surface-container p-10 text-center shadow-glow md:p-20">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Ainda não sabe qual escolher?
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-lg">
              Me envie seu objetivo e eu desenho a estratégia técnica ideal para
              o seu negócio decolar.
            </p>
            <ButtonLink href="/solicitar-orcamento" variant="green">
              <Icon>chat</Icon> Me envie seu objetivo
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
