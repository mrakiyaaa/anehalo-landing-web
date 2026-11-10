import Image from "next/image";
import { edgeHelp } from "@/config/help";
import { site } from "@/config/site";
import { Icon } from "./Icons";

export function DownloadPanel() {
  return (
    <section id="download" className="block" aria-labelledby="downloadTitle">
      <div className="dl">
        <Image src="/icon.webp" width={96} height={96} alt="" />
        <h2 id="downloadTitle">Get Anehalo for Windows</h2>
        <p>One installer, a short setup, and your first note is a keystroke away.</p>
        <a className="btn primary big" href={site.downloadUrl}>
          <Icon name="download" />
          Download for Windows
        </a>
        <div className="dl-meta">
          <span>Version {site.version}</span>
          <span>Windows 10 and 11</span>
          <span>Uninstalling keeps your notes</span>
        </div>
        <p className="dl-note">
          The installer is not code-signed yet, so Windows may show a SmartScreen warning. The steps below explain what
          to click.
        </p>
        <div className="faq dl-help">
          <details className="card">
            <summary>
              {edgeHelp.q}
              <Icon name="plus" />
            </summary>
            <div className="faq-a">
              <p>{edgeHelp.a}</p>
            </div>
          </details>
        </div>
        <ol className="steps">
          <li>
            <div>
              <b>Download the installer</b>
              <span>One file, no account.</span>
            </div>
          </li>
          <li>
            <div>
              <b>Run it</b>
              <span>If Windows says &quot;Windows protected your PC&quot;, choose More info, then Run anyway.</span>
            </div>
          </li>
          <li>
            <div>
              <b>Finish the short setup</b>
              <span>Pick a name, a notes folder and a theme. Then press Ctrl Alt N from anywhere.</span>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
