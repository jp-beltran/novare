"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { validateBriefing, type BriefingErrors, type BriefingValues } from "@/lib/form-validation";

const initialValues: BriefingValues = { name: "", email: "", whatsapp: "", business: "", segment: "", pageType: "" };
const fieldClass = "min-h-14 w-full rounded-md border border-outline-variant bg-surface-highest px-4 py-3 text-on-surface placeholder:text-outline focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function Field({ label, name, error, type = "text", placeholder }: { label: string; name: keyof BriefingValues; error?: string; type?: string; placeholder: string }) {
  return <div className="grid gap-1.5"><label className="text-sm font-semibold" htmlFor={name}>{label}</label><input aria-describedby={error ? `${name}-error` : undefined} aria-invalid={Boolean(error)} className={fieldClass} id={name} name={name} placeholder={placeholder} type={type}/>{error&&<p className="mb-0 text-sm text-error" id={`${name}-error`} role="alert">{error}</p>}</div>;
}

export function BriefingForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<BriefingErrors>({});

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(Object.keys(initialValues).map((key) => [key, String(formData.get(key) ?? "")])) as BriefingValues;
    const nextErrors = validateBriefing(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) router.push("/sucesso");
  }

  return <form className="grid gap-10 rounded-lg border border-outline-variant bg-surface-low p-6 md:gap-12 md:p-12" noValidate onSubmit={submit}>
    <div className="grid gap-6 md:grid-cols-2">
      <Field label="Nome Completo" name="name" error={errors.name} placeholder="Como devemos te chamar?"/>
      <Field label="E-mail Corporativo" name="email" error={errors.email} type="email" placeholder="contato@empresa.com"/>
      <Field label="WhatsApp" name="whatsapp" error={errors.whatsapp} type="tel" placeholder="(00) 00000-0000"/>
      <Field label="Nome do Negócio" name="business" error={errors.business} placeholder="Sua marca ou empresa"/>
    </div>
    <div className="grid gap-6 md:grid-cols-2">
      <Field label="Segmento" name="segment" error={errors.segment} placeholder="Ex: SaaS, E-commerce, Saúde..."/>
      <div className="grid gap-1.5"><label className="text-sm font-semibold" htmlFor="pageType">Tipo de Página</label><select aria-describedby={errors.pageType ? "pageType-error" : undefined} aria-invalid={Boolean(errors.pageType)} className={fieldClass} defaultValue="" id="pageType" name="pageType"><option disabled value="">Selecione uma opção</option><option>Landing Page de Vendas</option><option>Site Institucional</option><option>Página de Captura (Lead Gen)</option><option>Portfólio / Pessoal</option><option>Outro</option></select>{errors.pageType&&<p className="mb-0 text-sm text-error" id="pageType-error" role="alert">{errors.pageType}</p>}</div>
    </div>
    <fieldset><legend className="text-sm font-semibold">Objetivos Principais (Selecione todos que aplicam)</legend><div className="mt-4 grid gap-3 md:grid-cols-2">{["Aumentar Conversão","Autoridade de Marca","Lançamento de Produto","Redesign Moderno"].map(item=><label className="flex cursor-pointer items-center gap-3 rounded-md border border-transparent bg-surface-highest p-3 text-on-surface-variant hover:border-secondary" key={item}><input className="h-5 w-5 accent-secondary" name="goals" type="checkbox" value={item}/>{item}</label>)}</div></fieldset>
    <div className="grid gap-8 md:grid-cols-2">{[["domain","Já possui Domínio?"],["hosting","Já possui Hospedagem?"]].map(([name,label])=><fieldset key={name}><legend className="text-sm font-semibold">{label}</legend><div className="mt-4 flex gap-12">{["Sim","Não"].map(value=><label className="flex items-center gap-2 text-on-surface-variant" key={value}><input className="h-5 w-5 accent-primary" name={name} type="radio" value={value}/>{value}</label>)}</div></fieldset>)}</div>
    <div className="grid gap-1.5"><label className="text-sm font-semibold" htmlFor="message">Mensagem Adicional</label><textarea className={fieldClass} id="message" name="message" placeholder="Conte-nos mais detalhes sobre o que você imagina para este projeto..." rows={5}/></div>
    <div><button className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-10 py-3 font-semibold text-[#23005c] transition hover:brightness-110 md:w-auto" type="submit">Enviar Briefing <span className="icon">arrow_forward</span></button><p className="mb-0 mt-3 text-center text-sm md:text-left">Ao enviar, você concorda com nossos termos de privacidade.</p></div>
  </form>;
}
