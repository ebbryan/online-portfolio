import React from "react";

interface ISiteAboutMeProps {
  id: TNavItemIDTypes;
}

const SiteAboutMe = (props: ISiteAboutMeProps) => {
  return (
    <section
      id={props.id}
      className={`h-screen flex flex-col items-center justify-center bg-linear-to-t from-black/20 to-white`}
    >
      Site About Me
    </section>
  );
};

export default SiteAboutMe;
