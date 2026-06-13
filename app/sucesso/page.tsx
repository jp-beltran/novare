import Link from "next/link";
import { SiteFooter } from "@/components/site-shell";
import { ButtonLink, Icon } from "@/components/ui";

export default function Sucesso() {
  return <div className="flex min-h-screen flex-col"><header className="grid h-20 place-items-center border-b border-outline-variant bg-background/80 backdrop-blur-md"><Link className="font-display text-2xl font-bold" href="/">Novare</Link></header><main className="grid flex-1 place-items-center px-6 py-section text-center"><section><div className="mx-auto mb-6 grid h-24 w-24 animate-pulse place-items-center rounded-full border border-secondary/20 bg-secondary/10 text-secondary"><span className="icon filled-icon text-5xl">check_circle</span></div><h1 className="mb-3 text-4xl font-bold md:text-5xl">Briefing recebido!</h1><p className="mx-auto mb-12 max-w-md text-lg">Analisaremos suas informações e entraremos em contato via WhatsApp.</p><div className="flex flex-col justify-center gap-4 sm:flex-row"><a className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-secondary bg-secondary px-8 py-3 font-semibold text-[#002109]" href="#whatsapp"><Icon>chat</Icon>Falar no WhatsApp</a><ButtonLink href="/" variant="outline">Voltar ao início</ButtonLink></div></section></main><SiteFooter compact/></div>;
}
