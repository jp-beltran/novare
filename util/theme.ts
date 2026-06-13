export const THEME_STORAGE_KEY = "novare-theme";

export type Theme = "light" | "dark";

type ThemeStorageReader = Pick<Storage, "getItem">;
type ThemeStorageWriter = Pick<Storage, "setItem">;
type ThemeRoot = Pick<HTMLElement, "setAttribute">;

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

export function nextTheme(theme: Theme): Theme {
  return theme === "dark" ? "light" : "dark";
}

export function getStoredTheme(storage: ThemeStorageReader): Theme | null {
  try {
    const value = storage.getItem(THEME_STORAGE_KEY);
    return isTheme(value) ? value : null;
  } catch {
    return null;
  }
}

export function applyTheme(
  theme: Theme,
  root: ThemeRoot,
  storage?: ThemeStorageWriter,
): void {
  root.setAttribute("data-theme", theme);

  if (storage) {
    try {
      storage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // The visual preference still applies when storage is unavailable.
    }
  }
}
