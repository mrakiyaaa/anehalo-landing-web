import type { ReactNode } from "react";
import { Icon } from "./Icons";

const questions: { q: string; a: ReactNode }[] = [
  {
    q: "Where are my notes saved?",
    a: (
      <>
        In a folder on your PC. The default is <code>Documents\Anehalo</code>. You can pick another folder during setup
        or later in Settings. Folders are real folders and notes are .md files.
      </>
    ),
  },
  { q: "Does it need internet?", a: "No. Anehalo works offline. There is no account and no cloud." },
  {
    q: "Why does Windows warn me when I install it?",
    a: 'The installer is not code-signed yet, so SmartScreen shows "Windows protected your PC". Choose More info, then Run anyway. Do this only for an installer you downloaded from this page.',
  },
  {
    q: "Can I open my notes in other apps?",
    a: "Yes, they are Markdown files. Text color, size, underline and highlight are saved as small HTML tags, which other apps may ignore or show as plain text. Everything else is standard Markdown.",
  },
  {
    q: "Does it sync between devices?",
    a: "Not by itself. Choose a notes folder inside OneDrive or Dropbox and that app does the syncing. Anehalo reloads a note when its file changes on disk.",
  },
  { q: "What happens to my notes if I uninstall?", a: "Uninstalling keeps your notes folder and your settings." },
  {
    q: "Which languages can I write in?",
    a: "Any language your keyboard supports, including Sinhala and Tamil. Search and PDF export work with them too.",
  },
  { q: "Is there a Mac or Linux version?", a: "Not yet. Anehalo is for Windows 10 and 11 for now." },
];

export function Faq() {
  return (
    <section id="faq" className="block" aria-labelledby="faqTitle">
      <div className="head">
        <h2 id="faqTitle">Questions</h2>
        <p>Short answers about where your notes live and how the app behaves.</p>
      </div>
      <div className="faq">
        {questions.map(({ q, a }, index) => (
          <details key={q} className="card" open={index === 0}>
            <summary>
              {q}
              <Icon name="plus" />
            </summary>
            <div className="faq-a">
              <p>{a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
