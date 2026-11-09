import { DownloadPanel } from "@/components/DownloadPanel";
import { Faq } from "@/components/Faq";
import { FeatureGrid } from "@/components/FeatureGrid";
import { FeatureTabs } from "@/components/FeatureTabs";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IconSprite } from "@/components/Icons";
import { Nav } from "@/components/Nav";
import { Shortcuts } from "@/components/Shortcuts";

export default function Home() {
  return (
    <>
      <IconSprite />
      <Nav />
      <div id="top" />
      <Hero />
      <main>
        <section id="features" className="block" aria-labelledby="featuresTitle">
          <div className="head">
            <h2 id="featuresTitle">Open it. Type. Done.</h2>
            <p>Anehalo is made for the moment you just need to write something down.</p>
          </div>
          <FeatureTabs />
        </section>
        <FeatureGrid />
        <Shortcuts />
        <DownloadPanel />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
