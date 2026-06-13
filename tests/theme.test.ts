import assert from "node:assert/strict";
import test from "node:test";

import {
  applyTheme,
  getStoredTheme,
  nextTheme,
  THEME_STORAGE_KEY,
} from "../util/theme";

test("alternates between light and dark themes", () => {
  assert.equal(nextTheme("dark"), "light");
  assert.equal(nextTheme("light"), "dark");
});

test("returns only valid themes from session storage", () => {
  const storage = {
    getItem: (key: string) => key === THEME_STORAGE_KEY ? "light" : null,
  };
  const invalidStorage = { getItem: () => "system" };

  assert.equal(getStoredTheme(storage), "light");
  assert.equal(getStoredTheme(invalidStorage), null);
});

test("applies theme to the document root and persists it", () => {
  const attributes = new Map<string, string>();
  const storageValues = new Map<string, string>();
  const root = {
    setAttribute: (name: string, value: string) => attributes.set(name, value),
  };
  const storage = {
    setItem: (key: string, value: string) => storageValues.set(key, value),
  };

  applyTheme("light", root, storage);

  assert.equal(attributes.get("data-theme"), "light");
  assert.equal(storageValues.get(THEME_STORAGE_KEY), "light");
});
