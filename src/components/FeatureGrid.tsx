import { Icon, type IconName } from "./Icons";

const features: { icon: IconName; tone: string; title: string; text: string }[] = [
  { icon: "save", tone: "sky", title: "Auto-save", text: "Every change is saved as you type, and again when you close the window." },
  { icon: "file", tone: "mint", title: "Plain Markdown", text: "Notes stay readable in any text editor, now and in ten years." },
  { icon: "wifi-off", tone: "peach", title: "Works offline", text: "No account, no cloud. Your notes stay on your PC." },
  { icon: "text", tone: "butter", title: "Rich text", text: "Colors, sizes, tables, checklists, images and a / menu for quick blocks." },
  { icon: "search", tone: "lilac", title: "Search in any language", text: "Ctrl K finds notes by title or text, including Sinhala and Tamil." },
  { icon: "export", tone: "rose", title: "Copy or export", text: "Copy a note as Markdown, or save it as a .md or PDF file." },
  { icon: "contrast", tone: "sky", title: "Light and dark", text: "A smooth switch that remembers your choice. Try the one at the top of this page." },
  { icon: "monitor", tone: "mint", title: "Always ready", text: "Stays in the tray, so the shortcut works the moment you need it." },
];

export function FeatureGrid() {
  return (
    <section className="block" aria-labelledby="packedTitle">
      <div className="head">
        <h2 id="packedTitle">Everything in one small app</h2>
        <p>The tools you reach for every day, without a sign-up or a sync screen.</p>
      </div>
      <div className="feat">
        {features.map((feature) => (
          <div key={feature.title} className="f card">
            <span className={`fi tone-${feature.tone}`}>
              <Icon name={feature.icon} />
            </span>
            <h4>{feature.title}</h4>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
