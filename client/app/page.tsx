import HeroComponent from "@/components/SiteLandingPage/Hero";

export default function Home() {
  return (
    <>
      <section id="home">
        <HeroComponent color="bg-white" text="Home" />
      </section>

      <section id="portfolio">
        <HeroComponent color="bg-black/20" text="Portfolio" />
      </section>

      <section id="about">
        <HeroComponent color="bg-white" text="About Me" />
      </section>
    </>
  );
}
