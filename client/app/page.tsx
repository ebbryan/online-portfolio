import SiteHero from "@/components/SiteHero";
import SiteAboutMe from "@/components/SiteAboutMe";
import SitePortfolio from "@/components/SitePortfolio";

export default function Home() {
  return (
    <>
      <SiteHero id="home" />
      <SitePortfolio id="portfolio" />
      <SiteAboutMe id="about-me" />
    </>
  );
}
