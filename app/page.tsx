import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/site-shell";
import { ButtonLink, CheckList, Icon, SectionHeading } from "@/components/ui";
import { homeProjects } from "@/lib/site-data";

const dashboard =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAfpPPHV5HUn_l-hNpNZjlq8nGL-x8rGozpGxrMe7cvos9XT2di_NLVlzDPKwJcz4sXxeB9PwEWQFBBAJz6uqGJZdvgO16RDWWEqcukIYe0hOkSRG3G5iab235H_-VYRNLM_JMP_qJTNtRdQViaTpEJSOLZsbAb19ubs9_5lzhPeiF4_docxWKiwz-tmPbiXABwsTT0_CKLiGGRN7Px37SGrzPw-FrK_Om3QuTs53gYyYzfewV6drMFK-wB8H98odY2ULIeIQJrmlA";
const dataImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD8vbj20pS1HPqDqJWwDIsO8PdzieqXL5l35M3IKDJqu4UbU1muL600AaClobdf7WQm16N-3tMRB2oBmynfUENjtVkJ4VlhcgX2bTRV6wmHE3RGjrseCmrR906W3_X-zQ4b9O5vwnzMFjTvDIhorWs7SGnnXBVzmarjm3lN1pxUwdpysytIj7Gx3i7-Zj1AywFOiW-ucLFuNLg9g95qTC_52v84Ze85HEIGy_2LpcMZ7l36ebsyWWgACV__nftHqTrsaugn5Tb4v6k";
const officeImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBtmpCHmww2DrVW2-04Y25OC2MrRPcMqWkcK5QRrLB0DQppyH0VYqy9Xh8bIqQufJF5kmAvcYcOxLmghkL4KU3w6MKRnSn0ojG0m60pxgnfDtMyfSvwCLblc03GRcaSgVv8BvtVN85d-HIWebpOktRd9zTeN0SZjZzv5filo-BzgwxURW5ScmlTSwEGvML1J5dTpPzI338OkiYkGlllKmJTk7JRPMNgndUj4q29dAXQ4V8Lko4u5gkd0lfLIyYZSOw3VxK37Yt_BdM";

const problems = [
  [
    "warning",
    "Dependência do Instagram",
    "Seu negócio fica vulnerável às mudanças de algoritmo e instabilidades das redes sociais.",
  ],
  [
    "person_remove",
    "Perda de Clientes",
    "A falta de uma presença profissional faz com que potenciais leads escolham a concorrência.",
  ],
  [
    "speed",
    "Página Lenta",
    "Cada segundo de carregamento extra custa conversões e prejudica seu ranqueamento no Google.",
  ],
] as const;
const features = [
  [
    "check_circle",
    "Design Estratégico",
    "Interface focada no comportamento do usuário para máxima conversão.",
  ],
  [
    "bolt",
    "Página Ultra Rápida",
    "Otimização máxima de código para carregamento em menos de 1 segundo.",
  ],
  [
    "chat",
    "Foco no WhatsApp",
    "Direcionamento inteligente para seu time comercial fechar negócio.",
  ],
  [
    "cloud",
    "Hospedagem Premium",
    "Suporte total para Vercel ou Hostinger com estabilidade de 99.9%.",
  ],
] as const;
const steps = [
  ["01", "Briefing", "Entendemos seus objetivos de negócio."],
  ["02", "Direção", "Definimos a estratégia de conversão."],
  ["03", "Criação", "Design visual único e exclusivo."],
  ["04", "Dev", "Codificação otimizada e responsiva."],
  ["05", "Publicação", "Hospedagem e configuração de domínio."],
  ["06", "Ajustes", "Refinamentos finais para o lançamento."],
] as const;
const plans = [
  {
    title: "Essencial",
    text: "Ideal para quem está começando agora.",
    price: "R$ 1.500",
    items: [
      "Landing Page Única",
      "Design Responsivo",
      "Integração WhatsApp",
      "SEO básico",
    ],
    featured: false,
  },
  {
    title: "Profissional",
    text: "Foco total em alta conversão e escala.",
    price: "R$ 2.800",
    items: [
      "Tudo do Essencial",
      "Copywriting Estratégico",
      "Analytics & Pixel Meta",
      "Otimização de Velocidade",
    ],
    featured: true,
  },
  {
    title: "Premium",
    text: "Identidade visual e funil completo.",
    price: "Sob consulta",
    items: [
      "Tudo do Profissional",
      "Gestão de Tráfego (1 mês)",
      "Automação de E-mail",
      "Suporte VIP 24h",
    ],
    featured: false,
  },
] as const;
const faqs = [
  [
    "Quanto tempo demora para a página ficar pronta?",
    "Em média, entregamos o projeto finalizado entre 7 a 15 dias úteis após o envio de todo o conteúdo necessário.",
  ],
  [
    "Eu preciso pagar mensalidade?",
    "Não cobramos mensalidade pelo desenvolvimento. Você pagará apenas domínio e hospedagem.",
  ],
  [
    "A página já vem otimizada para o Google?",
    "Sim, todas as páginas seguem as melhores práticas de SEO on-page.",
  ],
  [
    "Vocês fazem a logomarca também?",
    "O serviço de branding é oferecido como adicional ou incluído no plano Premium.",
  ],
] as const;

export default function Home() {
  return (
    <PageShell>
      <section className="hero-glow relative overflow-hidden px-6 pb-section pt-40 text-center">
        <div className="relative z-10 mx-auto max-w-content">
          <span className="mb-6 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold uppercase tracking-widest text-primary">
            Performance &amp; Design
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-7xl">
            Sua landing page profissional pronta para vender mais
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg">
            Transformamos cliques em clientes com design estratégico e
            tecnologia de ponta. Layouts autorais focados em conversão.
          </p>
          <div className="mb-20 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/solicitar-orcamento">Pedir orçamento</ButtonLink>
            <ButtonLink href="/pacotes" variant="outline">
              Ver pacotes
            </ButtonLink>
          </div>
          <div className="mx-auto max-w-[1000px] rounded-lg border border-outline-variant bg-surface-container p-4 shadow-glow">
            <div className="mb-3 flex gap-2 px-1">
              <i className="h-3 w-3 rounded-full bg-error/50" />
              <i className="h-3 w-3 rounded-full bg-tertiary/50" />
              <i className="h-3 w-3 rounded-full bg-secondary/50" />
            </div>
            <Image
              className="h-auto w-full rounded"
              src={dashboard}
              alt="Dashboard de conversão"
              width={1200}
              height={700}
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-low py-section" id="servicos">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            align="left"
            title="O site atual não gera resultados?"
            text="Entendemos os gargalos que impedem o seu crescimento digital."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {problems.map(([icon, title, text]) => (
              <article
                className="rounded border border-outline-variant bg-background p-6 transition hover:border-primary"
                key={title}
              >
                <Icon>{icon}</Icon>
                <h3 className="mb-3 mt-6 text-2xl font-bold">{title}</h3>
                <p className="mb-0">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="mx-auto grid max-w-content items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              title="Uma solução completa para sua empresa"
            />
            <ul className="grid gap-6">
              {features.map(([icon, title, text]) => (
                <li className="flex gap-4" key={title}>
                  <span className="max-h-[50%] icon rounded bg-secondary/10 p-1 text-secondary">
                    {icon}
                  </span>
                  <div>
                    <strong>{title}</strong>
                    <p className="mb-0">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-6">
              <div className="grid aspect-square place-items-center rounded-lg border border-outline-variant bg-surface-container">
                <span className="icon text-6xl text-primary">devices</span>
              </div>
              <Image
                className="h-full w-full rounded-lg border border-outline-variant object-cover grayscale opacity-50"
                src={dataImage}
                alt="Análise de dados"
                width={500}
                height={625}
              />
            </div>
            <div className="grid gap-6 pt-12">
              <Image
                className="h-full w-full rounded-lg border border-outline-variant object-cover grayscale opacity-50"
                src={officeImage}
                alt="Escritório criativo"
                width={500}
                height={625}
              />
              <div className="grid aspect-square place-items-center rounded-lg border border-outline-variant bg-surface-container">
                <span className="icon text-6xl text-primary">ads_click</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-low py-section" id="portfolio">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            title="Portfólio em destaque"
            text="Conheça alguns dos projetos que entregamos recentemente e que estão performando no mercado."
          />
          <div className="grid gap-12 md:grid-cols-2">
            {homeProjects.map((project) => (
              <Link href="/portfolio" key={project.name} className="group">
                <Image
                  className="mb-6 aspect-video w-full rounded-lg border border-outline-variant object-cover transition duration-500 group-hover:scale-[1.02] group-hover:border-primary"
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={450}
                  loading="eager"
                />
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="mb-1 text-2xl font-bold">{project.name}</h3>
                    <p className="mb-0">{project.category}</p>
                  </div>
                  <Icon>arrow_forward</Icon>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section" id="processo">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            title="Como trabalhamos"
            text="Um processo transparente e ágil para colocar sua landing page no ar em tempo recorde."
          />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {steps.map(([number, title, text]) => (
              <article className="text-center" key={number}>
                <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full border border-outline-variant bg-surface-container font-display text-2xl font-bold text-primary">
                  {number}
                </div>
                <h3 className="mb-1 text-base font-bold">{title}</h3>
                <p className="mb-0 text-sm">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-section">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            title="Nossos Pacotes"
            text="Investimento transparente para diferentes níveis de maturidade digital."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                className={`relative flex flex-col rounded-lg bg-background p-8 md:p-12 ${plan.featured ? "border-2 border-primary shadow-glow lg:scale-105" : "border border-outline-variant"}`}
                key={plan.title}
              >
                {plan.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-6 py-2 text-xs font-bold text-[#23005c]">
                    MAIS POPULAR
                  </span>
                )}
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p>{plan.text}</p>
                <div className="mb-8 font-display text-4xl font-bold">
                  {plan.price}
                </div>
                <div className="mb-12 flex-1">
                  <CheckList items={plan.items} />
                </div>
                <ButtonLink
                  href="/solicitar-orcamento"
                  variant={plan.featured ? "purple" : "outline"}
                >
                  Selecionar {plan.title}
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section" id="faq">
        <div className="mx-auto grid max-w-content gap-16 px-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              title="Dúvidas Frequentes"
              text="Confira as respostas para as dúvidas mais comuns de nossos clientes."
            />
            <div className="rounded border border-outline-variant bg-surface-container p-8">
              <strong>Ainda precisa de ajuda?</strong>
              <Link
                className="mt-3 flex items-center gap-2 text-primary"
                href="/solicitar-orcamento"
              >
                Converse com nosso especialista <Icon>arrow_forward</Icon>
              </Link>
            </div>
          </div>
          <div className="grid gap-6">
            {faqs.map(([q, a]) => (
              <details
                className="rounded border border-outline-variant bg-surface-container p-6"
                key={q}
              >
                <summary className="flex cursor-pointer list-none justify-between gap-4 font-semibold">
                  {q}
                  <Icon>expand_more</Icon>
                </summary>
                <p className="mb-0 mt-6">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-section">
        <div className="mx-auto max-w-content px-6">
          <div className="rounded-2xl bg-primary-container p-10 text-center md:p-20">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Pronto para elevar o nível do seu negócio?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-white/80">
              Não deixe sua empresa no amadorismo. Tenha uma presença digital de
              alto impacto hoje mesmo.
            </p>
            <ButtonLink href="/solicitar-orcamento" variant="outline">
              Quero minha landing page agora
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
