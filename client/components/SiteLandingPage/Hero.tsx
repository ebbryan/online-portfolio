import React from "react";

const HeroComponent = ({ color, text }: { color: string; text: string }) => {
  return (
    <section
      className={`h-screen flex flex-col items-center justify-center ${color}`}
    >
      {text}
    </section>
  );
};

export default HeroComponent;
