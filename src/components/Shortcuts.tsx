import { site } from "@/config/site";

export function Shortcuts() {
  return (
    <section id="shortcuts" className="block" aria-labelledby="shortcutsTitle">
      <div className="head">
        <h2 id="shortcutsTitle">Keyboard first</h2>
        <p>Six shortcuts cover most of a day with your notes.</p>
      </div>
      <div className="short">
        {site.shortcuts.map((shortcut) => (
          <div key={shortcut.label} className="shortcut card">
            <div className="keys">
              {shortcut.keys.map((key) => (
                <span key={key} className="k">
                  {key}
                </span>
              ))}
            </div>
            <span className="what">{shortcut.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
