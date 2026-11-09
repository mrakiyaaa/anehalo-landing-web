"use client";

import { useSyncExternalStore, type MouseEvent } from "react";
import { Icon } from "./Icons";

const STORAGE_KEY = "anehalo-site-theme";
const darkQuery = "(prefers-color-scheme: dark)";

function effectiveTheme(): "dark" | "light" {
  const saved = document.documentElement.dataset.theme;
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia(darkQuery).matches ? "dark" : "light";
}

// Re-render when the OS theme changes or when data-theme on <html> changes.
function subscribe(onChange: () => void) {
  const media = window.matchMedia(darkQuery);
  media.addEventListener("change", onChange);
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => {
    media.removeEventListener("change", onChange);
    observer.disconnect();
  };
}

const noopSubscribe = () => () => {};

function applyTheme(mode: "dark" | "light") {
  document.documentElement.dataset.theme = mode;
  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {}
}

export function ThemeSwitch() {
  const isDark = useSyncExternalStore(subscribe, () => effectiveTheme() === "dark", () => false);
  // false in the server HTML, true once hydrated. Until then CSS places the knob from data-theme.
  const hydrated = useSyncExternalStore(noopSubscribe, () => true, () => false);

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const next = effectiveTheme() === "dark" ? "light" : "dark";
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      applyTheme(next);
      return;
    }

    if (document.startViewTransition) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      const transition = document.startViewTransition(() => applyTheme(next));
      transition.ready
        .then(() => {
          root.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
            { duration: 650, easing: "cubic-bezier(0.4, 0, 0.2, 1)", pseudoElement: "::view-transition-new(root)" },
          );
        })
        .catch(() => {});
    } else {
      root.classList.add("theme-fade");
      applyTheme(next);
      setTimeout(() => root.classList.remove("theme-fade"), 450);
    }
  }

  return (
    <button
      className="theme"
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      data-ready={hydrated ? "" : undefined}
      onClick={toggle}
    >
      <span className="knob">
        <Icon name="sun" className="sun" />
        <Icon name="moon" className="moon" />
      </span>
    </button>
  );
}
