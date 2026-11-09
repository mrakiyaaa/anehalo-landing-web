export type Shortcut = { keys: string[]; label: string };

export const site = {
  name: "Anehalo",
  version: "0.1.0",
  downloadUrl: "https://github.com/mrakiyaaa/anehalo/releases/latest/download/Anehalo-Setup.exe",
  // TODO: replace with the live site address (used for metadataBase, Open Graph, robots and sitemap).
  siteUrl: "https://anehalo.example.com",
  githubUrl: "https://github.com/mrakiyaaa/anehalo",
  authorName: "Akila Lakshitha",
  authorUrl: "https://lakshitha.me",
  shortcuts: [
    { keys: ["Ctrl", "Alt", "N"], label: "New note from any app" },
    { keys: ["Ctrl", "K"], label: "Search all notes" },
    { keys: ["Ctrl", "F"], label: "Find in this note" },
    { keys: ["/page"], label: "Link another note" },
    { keys: ["Alt", "←", "→"], label: "Back and forward between notes" },
    { keys: ["Ctrl", "Shift", "C"], label: "Copy note as Markdown" },
  ] as Shortcut[],
};
