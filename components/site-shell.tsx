import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader({ active }: { active?: "portfolio" }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-outline-variant bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-content items-center gap-6 px-6">
        <Link className="block" href="/" aria-label="Novare">
          <Image
            className="h-12 w-32 object-cover object-center"
            src="/assets/logo-side.jpeg"
            alt="Novare"
            width={180}
            height={72}
            priority
          />
        </Link>
        <nav
          className="ml-auto hidden items-center gap-9 md:flex"
          aria-label="Navegação principal"
        >
          <Link
            className="text-on-surface-variant transition-colors hover:text-primary"
            href="/#servicos"
          >
            Serviços
          </Link>
          <Link
            className={`transition-colors hover:text-primary ${active === "portfolio" ? "border-b-2 border-primary font-semibold text-primary" : "text-on-surface-variant"}`}
            href="/portfolio"
          >
            Portfólio
          </Link>
          <Link
            className="text-on-surface-variant transition-colors hover:text-primary"
            href="/#precos"
          >
            Preços
          </Link>
          <Link
            className="text-on-surface-variant transition-colors hover:text-primary"
            href="/#contato"
          >
            Contato
          </Link>
        </nav>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
        <Link
          className="ml-auto hidden min-h-11 items-center rounded bg-white px-6 font-semibold text-[#06100b] transition hover:bg-secondary md:ml-0 md:inline-flex"
          href="/solicitar-orcamento"
        >
          Falar com a Novare
        </Link>
        <details className="group relative ml-auto md:hidden">
          <summary
            className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded border border-outline-variant"
            aria-label="Abrir menu"
          >
            <span className="icon">menu</span>
          </summary>
          <nav
            className="absolute right-0 top-14 grid w-56 gap-1 rounded-lg border border-outline-variant bg-surface-high p-3 shadow-2xl"
            aria-label="Navegação móvel"
          >
            <Link className="rounded p-3 hover:bg-surface-highest" href="/">
              Início
            </Link>
            <Link
              className="rounded p-3 hover:bg-surface-highest"
              href="/#servicos"
            >
              Serviços
            </Link>
            <Link
              className="rounded p-3 hover:bg-surface-highest"
              href="/portfolio"
            >
              Portfólio
            </Link>
            <Link
              className="rounded p-3 hover:bg-surface-highest"
              href="/#precos"
            >
              Preços
            </Link>
            <Link
              className="rounded p-3 hover:bg-surface-highest"
              href="/#contato"
            >
              Contato
            </Link>
            <Link
              className="rounded p-3 font-semibold text-primary hover:bg-surface-highest"
              href="/solicitar-orcamento"
            >
              Falar com a Novare
            </Link>
            <div className="mt-2 flex justify-end border-t border-outline-variant pt-3">
              <ThemeToggle />
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter({ compact = false }: { compact?: boolean }) {
  if (compact)
    return (
      <footer className="border-t border-outline-variant bg-surface-container px-6 py-12 text-center">
        <p>
          © 2024 Novare. Seu próximo cliente está no Google. A gente te coloca
          na frente dele.
        </p>
      </footer>
    );
  return (
    <footer className="border-t border-outline-variant bg-surface-container pb-8 pt-20">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-start gap-3">
          <Link className="block" href="/" aria-label="Novare">
            <Image
              className="h-16 w-44 object-cover object-center"
              src="/assets/logo-side.jpeg"
              alt="Novare"
              width={220}
              height={88}
            />
          </Link>
          <p>
            Seu próximo cliente está no Google. A gente te coloca na frente
            dele.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <strong className="mb-2 text-sm uppercase tracking-wider text-primary">
            Links Rápidos
          </strong>
          <Link
            className="text-on-surface-variant hover:text-secondary"
            href="/#servicos"
          >
            Serviços
          </Link>
          <Link
            className="text-on-surface-variant hover:text-secondary"
            href="/portfolio"
          >
            Portfólio
          </Link>
          <Link
            className="text-on-surface-variant hover:text-secondary"
            href="/#precos"
          >
            Preços
          </Link>
          <Link
            className="text-on-surface-variant hover:text-secondary"
            href="/#contato"
          >
            Contato
          </Link>
        </div>
        <div className="flex flex-col items-start gap-2">
          <strong className="mb-2 text-sm uppercase tracking-wider text-primary">
            Social
          </strong>
          <a
            className="text-on-surface-variant hover:text-secondary"
            href="#linkedin"
          >
            LinkedIn
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary"
            href="#instagram"
          >
            Instagram
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary"
            href="#whatsapp"
          >
            WhatsApp
          </a>
        </div>
        <div className="flex flex-col items-start gap-2">
          <strong className="mb-2 text-sm uppercase tracking-wider text-primary">
            Contato
          </strong>
          <p>contato@novare.com.br</p>
          <p>São Paulo, SP</p>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-content border-t border-outline-variant/50 px-6 pt-6 text-center text-on-surface-variant">
        © 2024 Novare. Seu próximo cliente está no Google. A gente te coloca na
        frente dele.
      </div>
    </footer>
  );
}

export function PageShell({
  children,
  active,
}: {
  children: ReactNode;
  active?: "portfolio";
}) {
  return (
    <>
      <SiteHeader active={active} />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
