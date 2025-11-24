import React from "react";

interface ISitePortfolioProps {
  id: TNavItemIDTypes;
}

const SitePortfolio = (props: ISitePortfolioProps) => {
  return (
    <section
      id={props.id}
      className={`h-screen flex flex-col items-center justify-center bg-black/20`}
    >
      Portfolio
    </section>
  );
};

export default SitePortfolio;
