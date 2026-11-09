import type { CSSProperties } from "react";

const symbols = {
  windows: <path d="M3 5.6l7.8-1.1v7H3zM12.2 4.3L21 3v8.5h-8.8zM3 12.5h7.8v7L3 18.4zM12.2 12.5H21V21l-8.8-1.2z" />,
  download: <path d="M12 4v11M7.5 10.5L12 15l4.5-4.5M5 20h14" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
  all: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  file: (
    <>
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5" />
    </>
  ),
  link: <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" />,
  contrast: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
    </>
  ),
  save: (
    <>
      <path d="M5 4h11l3 3v13H5z" />
      <path d="M8 4v5h7V4M8 20v-6h8v6" />
    </>
  ),
  "wifi-off": (
    <path d="M2 8.8a15 15 0 0 1 4-2.5M22 8.8a15 15 0 0 0-11.5-3.3M5 12.9a10 10 0 0 1 3.5-2M19 12.9a10 10 0 0 0-5.3-2.8M8.5 16.4a5 5 0 0 1 7 0M12 20h.01M3 3l18 18" />
  ),
  text: <path d="M5 6V4h14v2M12 4v16M9 20h6" />,
  export: <path d="M12 4v10M8 10l4 4 4-4M5 20h14" />,
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  pen: <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19z" />,
  plus: <path d="M12 5v14M5 12h14" />,
  min: <path d="M5 12h14" />,
  max: <rect x="6" y="6" width="12" height="12" rx="2" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  back: <path d="M19 12H5M11 6l-6 6 6 6" />,
  next: <path d="M9 6l6 6-6 6" />,
  list: <path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" />,
  table: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M9 5v14" />
    </>
  ),
};

export type IconName = keyof typeof symbols;

/** Renders every symbol once. Place it a single time near the top of the page. */
export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      {Object.entries(symbols).map(([name, shape]) => (
        <symbol key={name} id={`i-${name}`} viewBox="0 0 24 24">
          {shape}
        </symbol>
      ))}
    </svg>
  );
}

type IconProps = { name: IconName; fill?: boolean; className?: string; style?: CSSProperties };

export function Icon({ name, fill, className, style }: IconProps) {
  const classes = ["ico", fill && "fill", className].filter(Boolean).join(" ");
  return (
    <svg className={classes} style={style} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}
