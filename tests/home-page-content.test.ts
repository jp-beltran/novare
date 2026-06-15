import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const home = readFileSync("app/page.tsx", "utf8");
const shell = readFileSync("components/site-shell.tsx", "utf8");

test("home page follows the Novare main-page copy from changes", () => {
  assert.match(home, /Seu negócio está[\s\S]*invisível[\s\S]*no Google/);
  assert.match(home, /Seu próximo cliente está pesquisando no Google agora/);
  assert.match(home, /97%/);
  assert.match(home, /Todo mês sem site é dinheiro que foi pro[\s\S]*concorrente/);
  assert.match(home, /Presença digital que gera cliente de verdade/);
  assert.match(home, /Tem agência que demora meses e some depois/);
  assert.match(home, /Menos do que você perde por mês sem aparecer/);
  assert.match(home, /ESSENCIAL/);
  assert.match(home, /R\$ 800/);
  assert.match(home, /PROFISSIONAL/);
  assert.match(home, /R\$ 2\.500/);
  assert.match(home, /COMPLETO/);
  assert.match(home, /R\$ 6\.000/);
  assert.match(home, /As perguntas que todo mundo tem antes de fechar/);
  assert.match(home, /Seu concorrente já está no Google/);
});

test("site shell exposes the navigation and footer requested in changes", () => {
  assert.match(shell, /Serviços/);
  assert.match(shell, /Portfólio/);
  assert.match(shell, /Preços/);
  assert.match(shell, /Contato/);
  assert.match(shell, /Falar com a Novare/);
  assert.match(shell, /Seu próximo cliente está no Google/);
  assert.match(shell, /Instagram/);
  assert.match(shell, /LinkedIn/);
  assert.match(shell, /WhatsApp/);
});
