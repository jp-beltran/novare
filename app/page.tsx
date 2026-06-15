import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/site-shell";
import { ButtonLink, CheckList, Icon, SectionHeading } from "@/components/ui";
import { homeProjects } from "@/lib/site-data";

const whatsappHref = "#contato";

const stats = [
  ["97%", "das pessoas pesquisam no Google antes de comprar"],
  ["8/10", "negócios sem site perdem clientes todo dia"],
  ["7 dias", "é o prazo de entrega da Novare"],
] as const;

const services = [
  [
    "domain",
    "Site institucional",
    'Quando alguém pesquisa, o que ele encontra? Se a resposta for "nada", você está perdendo dinheiro agora.',
  ],
  [
    "article",
    "Landing page",
    "Uma página feita pra transformar visitante em cliente. Sem distração. Só conversão.",
  ],
  [
    "storefront",
    "E-commerce",
    "Sua concorrência vende online enquanto você dorme. Cada dia sem loja é uma venda que vai pra outra pessoa.",
  ],
  [
    "health_and_safety",
    "Clínicas e consultórios",
    "Agenda vazia dói. Criamos um site que faz o paciente confiar antes mesmo de ligar.",
  ],
] as const;

const advantages = [
  [
    "Entrega em 7 dias",
    "Você não precisa esperar 3 meses. Nosso processo é direto ao ponto, sem reuniões infinitas.",
  ],
  [
    "Sem papo técnico",
    "Você foca no seu negócio. A gente cuida de todos os detalhes e explica tudo em linguagem humana.",
  ],
  [
    "Suporte que existe de verdade",
    'Depois de entregar, não desaparecemos. Ajustes, dúvidas e correções - é a gente que resolve.',
  ],
  [
    "Feito pra converter",
    "Site bonito que não traz cliente é decoração. O nosso tem estratégia por trás de cada escolha.",
  ],
] as const;

const plans = [
  {
    title: "ESSENCIAL",
    price: "R$ 800",
    text: "Uma landing page que captura clientes enquanto você trabalha.",
    items: [
      "Entrega em 5 dias",
      "Responsivo (mobile)",
      "1 revisão incluída",
      "Hospedagem 1º ano incluída",
    ],
    featured: false,
  },
  {
    title: "PROFISSIONAL",
    price: "R$ 2.500",
    text: "Site completo, profissional e pronto pra vender. Pare de ser invisível.",
    items: [
      "Entrega em 7 dias",
      "Até 5 páginas",
      "3 revisões inclusas",
      "Suporte por 30 dias",
      "Otimizado pro Google (SEO básico)",
    ],
    featured: true,
  },
  {
    title: "COMPLETO",
    price: "R$ 6.000",
    text: "Pra quem quer dominar o digital de vez. Sem limitação, pronto pra escalar.",
    items: [
      "E-commerce ou portal completo",
      "Revisões ilimitadas",
      "Suporte por 90 dias",
      "Treinamento de uso incluso",
    ],
    featured: false,
  },
] as const;

const faqs = [
  [
    "Já fui enganado por agência antes.",
    "Entendemos. Por isso mostramos o processo antes, durante e depois. Nada fica no escuro.",
  ],
  [
    "Vai demorar meses pra ficar pronto?",
    "Sites na Novare saem em até 7 dias úteis. Se mudar muita coisa no meio do caminho, a gente avisa antes.",
  ],
  [
    "Não entendo nada de tecnologia.",
    "Perfeito - não precisa entender. É exatamente pra isso que a Novare existe. Você fala o que quer, a gente resolve.",
  ],
  [
    "E se eu não gostar do resultado?",
    "Cada plano inclui revisões pra ajustar o site até ficar do seu jeito. Você só aprova quando estiver satisfeito.",
  ],
  [
    "Por que confiar numa agência pequena?",
    'Porque agência pequena não te perde no meio de 50 clientes. Você fala direto com quem faz - sem fila, sem "vou verificar e te retorno".',
  ],
] as const;

export default function Home() {
  const featuredProjects = homeProjects.slice(0, 3);

  return (
    <PageShell>
      <section className="hero-glow relative isolate min-h-screen overflow-hidden px-6 pb-20 pt-32 md:pb-24 md:pt-36">
        <Image
          className="pointer-events-none absolute bottom-8 right-[-18rem] z-0 w-[46rem] max-w-none mix-blend-screen opacity-60 md:right-[-8rem] md:w-[58rem]"
          src="/assets/logo-only.jpeg"
          alt=""
          width={1536}
          height={1024}
          priority
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-9rem)] max-w-content content-center gap-14">
          <div className="max-w-4xl">
            <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
              </span>
              Seu próximo cliente está pesquisando no Google agora
            </span>
            <h1 className="mb-7 text-4xl font-extrabold leading-none md:text-6xl lg:text-7xl">
              Seu negócio está{" "}
              <span className="brand-gradient-text">invisível</span> no Google.
              E isso custa caro todo mês.
            </h1>
            <p className="mb-10 max-w-2xl text-lg font-medium md:text-xl">
              A Novare cria sites que trabalham por você 24h por dia. Sem
              salário, sem reclamação - só resultado.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/solicitar-orcamento" variant="gradient">
                Quero meu site em 7 dias
              </ButtonLink>
              <ButtonLink href={whatsappHref} variant="outline">
                Falar no WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {stats.map(([number, text]) => (
              <article
                className="rounded-lg border border-outline-variant bg-surface-container/80 p-6 backdrop-blur"
                key={number}
              >
                <strong className="brand-gradient-text mb-3 block font-display text-4xl font-extrabold">
                  {number}
                </strong>
                <p className="mb-0 text-sm font-medium">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-low py-section">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-7 text-3xl font-extrabold leading-tight md:text-5xl">
            Todo mês sem site é dinheiro que foi pro{" "}
            <span className="brand-gradient-text">concorrente</span>.
          </h2>
          <p className="mx-auto max-w-3xl text-lg">
            Não porque o produto dele é melhor. Mas porque ele está no Google -
            e você não está em lugar nenhum.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-xl font-bold text-on-surface">
            Enquanto isso, alguém na sua região está procurando exatamente o que
            você vende. A pergunta é: ele vai te achar, ou vai achar o outro?
          </p>
          <ButtonLink href="/solicitar-orcamento" variant="gradient">
            Quero meu orçamento grátis
          </ButtonLink>
        </div>
      </section>

      <div className="overflow-hidden border-y border-outline-variant bg-background py-4">
        <div className="ticker-track flex w-max gap-8 text-sm font-bold uppercase text-on-surface">
          {Array.from({ length: 2 }).map((_, group) => (
            <span className="flex gap-8" key={group}>
              <span>Site no ar em 7 dias</span>
              <span>Sem papo técnico</span>
              <span>Suporte de verdade</span>
              <span>Feito pra converter</span>
            </span>
          ))}
        </div>
      </div>

      <section className="py-section" id="servicos">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            eyebrow="O QUE A NOVARE FAZ"
            title="Presença digital que gera cliente de verdade."
            text="Não fazemos site bonito por fazer. Cada projeto tem um objetivo: colocar dinheiro no seu caixa."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {services.map(([icon, title, text]) => (
              <article
                className="rounded-lg border border-outline-variant bg-surface-container p-6 transition hover:-translate-y-1 hover:border-primary"
                key={title}
              >
                <span className="mb-8 grid h-12 w-12 place-items-center rounded bg-secondary/10 text-secondary">
                  <Icon>{icon}</Icon>
                </span>
                <h3 className="mb-3 text-2xl font-extrabold">{title}</h3>
                <p className="mb-0">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-low py-section">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            eyebrow="POR QUE A NOVARE"
            title="Tem agência que demora meses e some depois. A Novare não."
            text='A Novare entrega rápido e fica com você depois da entrega - sem departamento, sem fila, sem "vamos verificar e te retornamos".'
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map(([title, text]) => (
              <article
                className="rounded-lg border border-outline-variant bg-background p-6"
                key={title}
              >
                <h3 className="mb-4 text-xl font-extrabold">{title}</h3>
                <p className="mb-0 text-sm">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section" id="portfolio">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            eyebrow="PORTFÓLIO"
            title="Site no ar. Não é promessa, é entrega."
            text="Cada projeto sai pronto pra converter - responsivo, rápido e feito pra gerar cliente desde o primeiro dia."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                href="/portfolio"
                className="group rounded-lg border border-outline-variant bg-surface-container p-3 transition hover:-translate-y-1 hover:border-primary"
                key={project.name}
              >
                <div className="mb-4 flex gap-2 px-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-tertiary/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary/70" />
                </div>
                <Image
                  className="aspect-video w-full rounded object-cover"
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={450}
                  loading="eager"
                />
                <div className="p-3">
                  <p className="mb-2 text-sm font-semibold uppercase text-secondary">
                    {project.category}
                  </p>
                  <h3 className="mb-4 text-2xl font-extrabold">
                    {project.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 font-semibold text-primary transition group-hover:text-secondary">
                    Ver site no ar <Icon>arrow_forward</Icon>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-low py-section" id="precos">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            eyebrow="INVESTIMENTO"
            title="Menos do que você perde por mês sem aparecer."
            text="Um cliente novo já paga o site inteiro. Quantos você deixou escapar esse mês?"
          />
          <div className="grid items-center gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                className={`relative flex min-h-full flex-col rounded-lg bg-background p-8 ${plan.featured ? "border-2 border-primary shadow-glow lg:scale-[1.03]" : "border border-outline-variant"}`}
                key={plan.title}
              >
                {plan.featured && (
                  <span className="brand-gradient absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-5 py-2 text-xs font-extrabold text-[#06100b]">
                    MAIS ESCOLHIDO
                  </span>
                )}
                <p className="mb-3 text-sm font-extrabold uppercase text-secondary">
                  {plan.title}
                </p>
                <div className="mb-5 font-display text-4xl font-extrabold">
                  {plan.price}
                  <span className="text-base font-semibold text-on-surface-variant">
                    {" "}
                    único
                  </span>
                </div>
                <p className="min-h-16">{plan.text}</p>
                <div className="mb-10 mt-6 flex-1">
                  <CheckList items={plan.items} />
                </div>
                <ButtonLink
                  href="/solicitar-orcamento"
                  variant={plan.featured ? "gradient" : "outline"}
                >
                  Quero esse plano
                </ButtonLink>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm">
            Após o 1º ano, manutenção/hospedagem é cobrada separadamente -
            combinado desde o início, sem letra miúda.
          </p>
        </div>
      </section>

      <section className="py-section" id="faq">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            eyebrow="DÚVIDAS COMUNS"
            title="As perguntas que todo mundo tem antes de fechar."
          />
          <div className="mx-auto grid max-w-4xl gap-4">
            {faqs.map(([q, a]) => (
              <details
                className="rounded-lg border border-outline-variant bg-surface-container p-6"
                key={q}
              >
                <summary className="flex cursor-pointer list-none justify-between gap-4 font-bold">
                  {q}
                  <Icon>expand_more</Icon>
                </summary>
                <p className="mb-0 mt-5">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-gradient px-6 py-section text-center" id="contato">
        <div className="mx-auto max-w-4xl text-[#06100b]">
          <h2 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Seu concorrente já está no Google. E você?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-semibold text-[#06100b]/80">
            Pare de perder cliente pra quem só apareceu primeiro. Fale com a
            gente hoje e receba seu orçamento grátis.
          </p>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded border border-[#06100b] bg-[#06100b] px-8 py-3 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-transparent hover:text-[#06100b]"
            href={whatsappHref}
          >
            Quero parar de ser invisível
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
