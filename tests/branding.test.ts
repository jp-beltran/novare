import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const brandingFiles = [
  "app/layout.tsx",
  "app/solicitar-orcamento/page.tsx",
  "app/sucesso/page.tsx",
  "components/site-shell.tsx",
  "package.json",
  "package-lock.json",
  "pnpm-lock.yaml",
];

test("uses Novare as the store identity", () => {
  const contents = brandingFiles.map((file) => readFileSync(file, "utf8")).join("\n");

  assert.doesNotMatch(contents, /StudioPixel|studiopixel|contato@studiopixel\.com\.br/);
  assert.match(contents, /Novare/);
  assert.match(contents, /contato@novare\.com\.br/);
});

test("preserves the existing pixel slogan", () => {
  const siteShell = readFileSync("components/site-shell.tsx", "utf8");

  assert.match(siteShell, /Alta performance em cada pixel/);
});
