import Image from "next/image";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer>
      <a className="brand" href="#top">
        <Image src="/icon-small.webp" width={30} height={30} alt="" />
        Anehalo
      </a>
      <span>Instant notes for Windows · Version {site.version}</span>
      <span>
        Built by{" "}
        <a href={site.authorUrl} target="_blank" rel="noopener">
          {site.authorName}
        </a>
      </span>
    </footer>
  );
}
