import Image from "next/image";
import { PageShell } from "@/components/site-shell";
import { ButtonLink, CheckList, SectionHeading } from "@/components/ui";
import { leadImage, portfolioProjects } from "@/lib/site-data";

export default function Portfolio() {
  return (
    <PageShell active="portfolio">
      <section className="px-6 pb-section pt-44 text-center">
        <span className="mb-6 inline-block rounded-full border border-outline-variant bg-surface-high px-6 py-1 text-sm font-semibold uppercase tracking-wider text-secondary">
          Portfólio de Alta Performance
        </span>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-7xl">
          Projetos pensados para
          <br className="hidden md:block" />{" "}
          <span className="text-primary">apresentar, vender e captar</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg">
          Combinamos design minimalista corporativo com estratégias de conversão
          para transformar visitantes em clientes fiéis.
        </p>
      </section>
      <div className="mx-auto -mt-16 flex max-w-content flex-wrap justify-center gap-3 px-6 pb-12">
        {["Todos", "Landing Pages", "Sites Simples", "Captação de Leads"].map(
          (item, i) => (
            <span
              className={`rounded-full border px-6 py-2 font-semibold ${i === 0 ? "border-primary-container bg-primary-container" : "border-outline-variant bg-surface-container"}`}
              key={item}
            >
              {item}
            </span>
          ),
        )}
      </div>
      <section className="pb-section">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-6 px-6 md:grid-cols-12">
          {portfolioProjects.map((project, i) => (
            <article
              className={`overflow-hidden rounded-lg border border-outline-variant bg-surface-container transition hover:border-primary ${i % 3 === 0 ? "md:col-span-8" : "md:col-span-4"}`}
              key={project.name}
            >
              <Image
                className={`w-full object-cover ${i % 3 === 0 ? "aspect-video" : "aspect-square"}`}
                src={project.image}
                alt={project.name}
                width={900}
                height={600}
              />
              <div className="p-6 md:p-8">
                <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-secondary">
                  {project.tag}
                </span>
                <h2 className="mb-2 text-2xl font-bold">{project.name}</h2>
                <p className="mb-0">{project.text}</p>
              </div>
            </article>
          ))}
          <article className="grid overflow-hidden rounded-lg border border-outline-variant bg-gradient-to-r from-surface-container to-surface-high md:col-span-12 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-secondary">
                Captação de Leads
              </span>
              <h2 className="mb-6 text-4xl font-bold">Lista VIP</h2>
              <p className="mb-8 text-lg">
                Páginas de captura de altíssima conversão com funil integrado
                para lançamentos de infoprodutos.
              </p>
              <CheckList
                items={[
                  "Taxa de conversão média de 42%",
                  "Integração total com CRMs",
                ]}
              />
            </div>
            <Image
              className="h-full min-h-72 w-full object-cover"
              src={leadImage}
              alt="Lista VIP"
              width={800}
              height={600}
            />
          </article>
        </div>
      </section>
      <section className="pb-section">
        <div className="mx-auto max-w-content px-6">
          <div className="rounded-xl border border-primary/20 bg-primary-container/10 p-10 text-center md:p-20">
            <SectionHeading
              title="Pronto para elevar o seu nível?"
              text="Não fazemos apenas sites bonitos. Criamos ferramentas de venda que trabalham por você 24h por dia."
            />
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink href="/solicitar-orcamento">
                Começar meu projeto
              </ButtonLink>
              <ButtonLink href="/#processo" variant="outline">
                Ver processo de criação
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
