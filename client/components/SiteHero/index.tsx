import React from "react";

interface ISiteHeroProps {
  id: TNavItemIDTypes;
}

const SiteHero = (props: ISiteHeroProps) => {
  return (
    <section
      id={props.id}
      className={`h-screen flex flex-col items-center justify-center`}
    >
      Site Hero
    </section>
  );
};

export default SiteHero;
