"use client";

import { useEffect, useState } from "react";
import { Icon, type IconName } from "./Icons";
import { WindowBar } from "./WindowBar";

type Tone = "sky" | "mint" | "lilac" | "rose" | "butter";

const folders: { name: string; count: number; tone?: Tone; icon: IconName }[] = [
  { name: "All notes", count: 8, icon: "all" },
  { name: "Work", count: 3, tone: "sky", icon: "folder" },
  { name: "Study", count: 1, tone: "mint", icon: "folder" },
  { name: "Projects", count: 2, tone: "lilac", icon: "folder" },
  { name: "Gym", count: 1, tone: "rose", icon: "folder" },
  { name: "Ideas", count: 1, tone: "butter", icon: "folder" },
];

const notes: { title: string; text: string; link?: string; folder: string; tone: Tone; when: string }[] = [
  { title: "Sprint demo on Friday", text: "Show the new login flow, then link the test cases.", folder: "Work", tone: "sky", when: "Just now" },
  { title: "Login flow test cases", text: "Valid, invalid and locked-account paths.", link: "Playwright locators", folder: "Work", tone: "sky", when: "12 min ago" },
  { title: "ISTQB revision", text: "Equivalence partitioning, boundary values, decision tables.", folder: "Study", tone: "mint", when: "Yesterday" },
  { title: "Anehalo feature list", text: "Auto-save, /page links, PDF export, dark mode.", link: "Anehalo build phases", folder: "Projects", tone: "lilac", when: "2 days ago" },
  { title: "Push day", text: "Bench 4x8, incline press 3x10, lateral raises 3x15.", folder: "Gym", tone: "rose", when: "Sunday" },
  { title: "App name ideas", text: "Short, soft, easy to type.", folder: "Ideas", tone: "butter", when: "31 Oct" },
];

/** Shows the auto-save rhythm: "Saving…" for a moment every few seconds. Off when motion is reduced. */
function useSaveLoop() {
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let done: ReturnType<typeof setTimeout> | undefined;
    const loop = setInterval(() => {
      setSaving(true);
      done = setTimeout(() => setSaving(false), 900);
    }, 5200);
    return () => {
      clearInterval(loop);
      clearTimeout(done);
    };
  }, []);
  return saving;
}

export function AppMock() {
  const saving = useSaveLoop();

  return (
    <div
      className="mock"
      role="img"
      aria-label="The Anehalo home screen in a Windows window, with a folder list, a note being typed, and recent notes as colored cards."
    >
      <WindowBar />
      <div className="m-side">
        <div className="m-search">
          <Icon name="search" />
          Search notes
        </div>
        <div className="m-quick">
          <span>+ Quick note</span>
          <small>Ctrl Alt N</small>
        </div>
        <div className="m-label">Folders</div>
        {folders.map((folder, index) => (
          <div
            key={folder.name}
            className={["m-folder", index === 0 && "on", folder.tone && `tone-${folder.tone}`].filter(Boolean).join(" ")}
          >
            <span className="fi">
              <Icon name={folder.icon} />
            </span>
            <b>{folder.name}</b>
            <i>{folder.count}</i>
          </div>
        ))}
      </div>
      <div className="m-main">
        <div className="m-hello">
          <h3>Good afternoon, Nimali</h3>
          <p>Wednesday, 4 November</p>
        </div>
        <div className="m-capture">
          <p>
            Sprint demo on Friday. Show the new login flow, then link the test cases.
            <span className="caret" />
          </p>
          <div className="m-foot">
            <span className="hint">
              <span className="kbd">/page</span> link a note
            </span>
            <span className="status" data-state={saving ? "saving" : "saved"}>
              <span className="dot">
                <Icon name="check" />
              </span>
              <span>{saving ? "Saving…" : "Saved just now"}</span>
            </span>
          </div>
        </div>
        <div className="m-head">
          <h4>Recent notes</h4>
          <span>8 notes · last edited first</span>
        </div>
        <div className="m-grid">
          {notes.map((note) => (
            <article key={note.title} className={`m-card tone-${note.tone}`}>
              <h5>{note.title}</h5>
              <p>{note.text}</p>
              {note.link && (
                <div className="m-link">
                  <Icon name="link" />
                  <span>{note.link}</span>
                </div>
              )}
              <div className="m-meta">
                <span className="chip">{note.folder}</span>
                <span className="when">{note.when}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
