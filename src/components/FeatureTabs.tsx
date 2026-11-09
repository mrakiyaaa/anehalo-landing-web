"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Icon } from "./Icons";
import { SavedStatus, WindowBar } from "./WindowBar";

type Tab = { id: string; label: string; panel: ReactNode };

function EditorBar({ title, chip, muted }: { title: string; chip: string; muted?: boolean }) {
  return (
    <div className="ed-bar">
      <span className="back-btn">
        <Icon name="back" />
      </span>
      <span className={muted ? "ed-title muted" : "ed-title"}>{title}</span>
      <span className="chip tone-sky">{chip}</span>
      <SavedStatus />
    </div>
  );
}

const quickPanel = (
  <>
    <div className="show-copy">
      <h3>A new note from any app</h3>
      <p>
        Press Ctrl Alt N and a new note opens with the cursor ready. It works even when Anehalo is closed to the tray.
        There is nothing to name and nothing to save.
      </p>
    </div>
    <div className="keys" aria-label="Control, Alt, N">
      <span className="key">Ctrl</span>
      <span className="plus">+</span>
      <span className="key">Alt</span>
      <span className="plus">+</span>
      <span className="key">N</span>
    </div>
    <div
      className="win short-win"
      role="img"
      aria-label="A new untitled note in Anehalo with the first lines already typed and a Saved just now status."
    >
      <WindowBar />
      <div className="win-body">
        <EditorBar title="Untitled note" chip="Inbox" muted />
        <div className="ed-body">
          <p>
            Call the lab about test data
            <span className="caret" />
          </p>
          <ul>
            <li>Ask for the March export</li>
            <li>Confirm who owns the data</li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

const files = [
  { name: "Sprint demo on Friday.md", date: "04/11/2026 14:31" },
  { name: "Login flow test cases.md", date: "04/11/2026 14:19", on: true },
  { name: "Playwright locators.md", date: "03/11/2026 18:40" },
];

const filesPanel = (
  <>
    <div className="show-copy">
      <h3>Your notes are plain files</h3>
      <p>
        Every folder is a real folder and every note is a Markdown file in <code>Documents\Anehalo</code>. Back them up,
        search them, or open them in any other app.
      </p>
    </div>
    <div
      className="win"
      role="img"
      aria-label="A Windows folder view of Documents, Anehalo, Work showing three Markdown files, with the text of one file on the right."
    >
      <WindowBar title="Work" lead={<Icon name="folder" style={{ color: "var(--sky-fg)" }} />} />
      <div className="win-body xp">
        <div className="addr-row">
          <div className="addr">
            <Icon name="folder" />
            Documents
            <Icon name="next" />
            Anehalo
            <Icon name="next" />
            <b>Work</b>
          </div>
        </div>
        <div className="xp-split">
          <div className="xp-list tone-sky">
            <div className="xp-row h">
              <span>Name</span>
              <span>Date modified</span>
              <span>Type</span>
            </div>
            {files.map((file) => (
              <div key={file.name} className={file.on ? "xp-row on" : "xp-row"}>
                <span className="nm">
                  <Icon name="file" />
                  <span>{file.name}</span>
                </span>
                <small>{file.date}</small>
                <small>MD File</small>
              </div>
            ))}
          </div>
          <div className="xp-prev">
            <div className="p-h">
              <Icon name="file" />
              Login flow test cases.md
            </div>
            <pre className="src">
              <span className="h"># Login flow test cases</span>
              {"\n\n- [x] Valid login\n- [x] Wrong password\n- [ ] Locked account\n\n"}
              <span className="m">Next:</span> <span className="l">[Playwright locators](Work/Playwright%20locators.md)</span>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </>
);

const linkPanel = (
  <>
    <div className="show-copy">
      <h3>Link notes with /page</h3>
      <p>
        Type <code>/page</code>, pick a note, and it becomes a link. Rename a note later and every link to it updates. A
        backlinks panel shows which notes point here.
      </p>
    </div>
    <div
      className="win"
      role="img"
      aria-label="A note being edited. Typing /page opens a list of notes to link, with Playwright locators selected. Below, a Linked from line lists two notes."
    >
      <WindowBar />
      <div className="win-body">
        <EditorBar title="Sprint demo on Friday" chip="Work" />
        <div className="ed-body">
          <p>
            Check the selectors against <span className="c-lilac">/page lo</span>
            <span className="caret" />
          </p>
          <div className="menu">
            <div className="menu-h">
              <Icon name="link" />
              Link a note
            </div>
            <div className="menu-item on tone-sky">
              <span className="fi">
                <Icon name="file" />
              </span>
              <b>Playwright locators</b>
              <span className="chip">Work</span>
              <small>Yesterday</small>
            </div>
            <div className="menu-item tone-sky">
              <span className="fi">
                <Icon name="file" />
              </span>
              <b>Login flow test cases</b>
              <span className="chip">Work</span>
              <small>12 min ago</small>
            </div>
            <div className="menu-item tone-peach">
              <span className="fi">
                <Icon name="plus" />
              </span>
              <b>Create &quot;lo&quot;</b>
              <small>New note</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const richPanel = (
  <>
    <div className="show-copy">
      <h3>Format it your way</h3>
      <p>
        Bold, italic, underline and strikethrough. Text colors, sizes and highlights. Checklists, tables, images, and a{" "}
        <code>/</code> menu for quick blocks.
      </p>
    </div>
    <div className="win" role="img" aria-label="A note with a formatting toolbar, colored and highlighted text, a checklist and a small table.">
      <WindowBar />
      <div className="win-body">
        <EditorBar title="Sprint demo on Friday" chip="Work" />
        <div className="ed-body">
          <div className="tools">
            <span className="tool on">B</span>
            <span className="tool i">I</span>
            <span className="tool u">U</span>
            <span className="tool s">S</span>
            <span className="sep" />
            <span className="swatch tone-rose" />
            <span className="swatch tone-lilac" />
            <span className="swatch tone-mint" />
            <span className="sep" />
            <span className="tool">
              <Icon name="list" />
            </span>
            <span className="tool">
              <Icon name="table" />
            </span>
          </div>
          <p>
            Show the <span className="c-rose">new login flow</span> and the <span className="hl">locked account</span> case.
          </p>
          <div className="todo">
            <span className="box on">
              <Icon name="check" />
            </span>
            <s>Book the room</s>
          </div>
          <div className="todo">
            <span className="box" />
            Share the test cases
          </div>
          <div className="grid-tbl">
            <div className="th">Test</div>
            <div className="th">Status</div>
            <div>Valid login</div>
            <div>
              <span className="pill tone-mint">Pass</span>
            </div>
            <div>Locked account</div>
            <div>
              <span className="pill tone-butter">To do</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const tabs: Tab[] = [
  { id: "quick", label: "Quick note", panel: quickPanel },
  { id: "files", label: "Plain files", panel: filesPanel },
  { id: "link", label: "Link notes", panel: linkPanel },
  { id: "rich", label: "Rich text", panel: richPanel },
];

export function FeatureTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const target = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: tabs.length - 1 }[event.key];
    if (target === undefined) return;
    event.preventDefault();
    const next = (target + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Anehalo features">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            className="tab"
            role="tab"
            id={`tab-${tab.id}`}
            aria-controls={`pane-${tab.id}`}
            aria-selected={index === active}
            tabIndex={index === active ? 0 : -1}
            type="button"
            onClick={() => setActive(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="showcase">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className="pane"
            id={`pane-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            hidden={index !== active}
          >
            {tab.panel}
          </div>
        ))}
      </div>
    </>
  );
}
