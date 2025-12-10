import React from "react";
import SplitText from "../SplitText";
import { Button } from "../ui/button";

interface ISiteHeroProps {
  id: TNavItemIDTypes;
}

const SiteHero = (props: ISiteHeroProps) => {
  return (
    <section
      id={props.id}
      className={`h-screen flex flex-col items-center py-70 gap-3 bg-gray-200`}
    >
      <div className="flex flex-col items-center gap-5">
        <h1 className="flex flex-wrap text-center text-4xl font-black">
          Creating visuals and experiences that resonate.
        </h1>
        <p className="flex p-2 flex-wrap text-center lg:w-2xl">
          Hi, I’m Earl Bryan — a Video Editor and Junior Full Stack Web
          Developer. I craft clean, engaging content and web experiences for
          brands, agencies, and personal clients.
        </p>
      </div>
      <Button variant={"default"} asChild>
        <a href="#portfolio">Explore My Work</a>
      </Button>
    </section>
  );
};

export default SiteHero;
