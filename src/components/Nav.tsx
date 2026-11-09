import Image from "next/image";
import { site } from "@/config/site";
import { ThemeSwitch } from "./ThemeSwitch";

export function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="Anehalo home">
        <Image src="/icon-small.webp" width={32} height={32} alt="" loading="eager" />
        Anehalo
      </a>
      <nav className="nav-links" aria-label="Page sections">
        <a href="#features">Features</a>
        <a href="#shortcuts">Shortcuts</a>
        <a href="#faq">Questions</a>
      </nav>
      <div className="nav-right">
        <ThemeSwitch />
        <a className="btn primary small" href={site.downloadUrl}>
          Download
        </a>
      </div>
    </header>
  );
}
