import { expect, test } from "@playwright/test";

const routes = [
  ["/", "home"],
  ["/pacotes", "pacotes"],
  ["/portfolio", "portfolio"],
  ["/solicitar-orcamento", "orcamento"],
  ["/sucesso", "sucesso"],
] as const;

for (const viewport of [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 375, height: 812 },
]) {
  test.describe(viewport.name, () => {
    test.use({ viewport });

    for (const [route, name] of routes) {
      test(`${name} renders without overflow or console errors`, async ({ page }) => {
        const errors: string[] = [];
        page.on("console", (message) => {
          if (message.type() === "error") errors.push(message.text());
        });

        const response = await page.goto(route);
        expect(response?.status()).toBe(200);
        await expect(page.locator("body")).toBeVisible();
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
        expect(errors).toEqual([]);
        await page.screenshot({ path: `/tmp/novare-${name}-${viewport.name}.png`, fullPage: true });
      });
    }
  });
}

test("briefing validates required fields and redirects after valid submission", async ({ page }) => {
  await page.goto("/solicitar-orcamento");
  await page.getByRole("button", { name: "Enviar Briefing" }).click();
  await expect(page.getByText("Informe seu nome completo.")).toBeVisible();
  await expect(page.getByText("Informe seu e-mail corporativo.")).toBeVisible();
  await expect(page.getByText("Informe seu WhatsApp.")).toBeVisible();
  await expect(page.getByText("Informe o nome do negócio.")).toBeVisible();
  await expect(page.getByText("Informe o segmento.")).toBeVisible();
  await expect(page.getByText("Selecione o tipo de página.")).toBeVisible();

  await page.getByLabel("Nome Completo").fill("Ana Silva");
  await page.getByLabel("E-mail Corporativo").fill("ana@empresa.com");
  await page.getByLabel("WhatsApp").fill("(11) 99999-9999");
  await page.getByLabel("Nome do Negócio").fill("Empresa");
  await page.getByLabel("Segmento").fill("SaaS");
  await page.getByLabel("Tipo de Página").selectOption({ label: "Landing Page de Vendas" });
  await page.getByRole("button", { name: "Enviar Briefing" }).click();

  await expect(page).toHaveURL(/\/sucesso$/);
  await expect(page.getByRole("heading", { name: "Briefing recebido!" })).toBeVisible();
});

test("keeps the theme toggle in the desktop header and inside the mobile menu", async ({ browser }) => {
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktop.goto("/");
  await expect(desktop.locator('button[aria-label^="Ativar modo"]:visible')).toHaveCount(1);
  await desktop.close();

  const mobile = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await mobile.goto("/");
  await expect(mobile.locator('button[aria-label^="Ativar modo"]:visible')).toHaveCount(0);
  await mobile.locator('summary[aria-label="Abrir menu"]').click();
  await expect(mobile.locator('button[aria-label^="Ativar modo"]:visible')).toHaveCount(1);
  await mobile.close();
});
