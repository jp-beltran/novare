import assert from "node:assert/strict";
import test from "node:test";

import { validateBriefing } from "../lib/form-validation";

test("requires the core contact and project fields", () => {
  const errors = validateBriefing({
    name: "",
    email: "",
    whatsapp: "",
    business: "",
    segment: "",
    pageType: "",
  });

  assert.deepEqual(errors, {
    name: "Informe seu nome completo.",
    email: "Informe seu e-mail corporativo.",
    whatsapp: "Informe seu WhatsApp.",
    business: "Informe o nome do negócio.",
    segment: "Informe o segmento.",
    pageType: "Selecione o tipo de página.",
  });
});

test("rejects an invalid email and accepts a complete briefing", () => {
  assert.deepEqual(
    validateBriefing({
      name: "Ana Silva",
      email: "ana@",
      whatsapp: "(11) 99999-9999",
      business: "Acme",
      segment: "SaaS",
      pageType: "Landing Page de Vendas",
    }),
    { email: "Informe um e-mail válido." },
  );

  assert.deepEqual(
    validateBriefing({
      name: "Ana Silva",
      email: "ana@acme.com",
      whatsapp: "(11) 99999-9999",
      business: "Acme",
      segment: "SaaS",
      pageType: "Landing Page de Vendas",
    }),
    {},
  );
});
