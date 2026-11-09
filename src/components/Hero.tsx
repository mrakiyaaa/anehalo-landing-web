import Image from "next/image";
import { site } from "@/config/site";
import { AppMock } from "./AppMock";
import { Icon } from "./Icons";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="heroTitle">
      <div className="hero-top">
        <Image className="app-icon" src="/icon.webp" width={108} height={108} alt="Anehalo app icon" preload />
        <span className="platform">
          <Icon name="windows" fill />
          Instant notes for Windows
        </span>
        <h1 id="heroTitle">
          Notes that <span className="mark">save themselves.</span>
        </h1>
        <p className="lead">
          Press Ctrl Alt N from any app and start typing. Anehalo keeps every note as a plain Markdown file in a folder
          on your PC.
        </p>
        <div className="cta">
          <a className="btn primary big" href={site.downloadUrl}>
            <Icon name="windows" fill />
            Download for Windows
          </a>
          <a className="btn line big" href="#features">
            See what it does
          </a>
        </div>
        <div className="micro">
          <span>
            <Icon name="check" />
            Version {site.version}
          </span>
          <span>
            <Icon name="check" />
            Windows 10 and 11
          </span>
          <span>
            <Icon name="check" />
            No account needed
          </span>
        </div>
      </div>

      <div className="stage">
        <AppMock />
      </div>
    </section>
  );
}
