"use client";
import SiteAboutMe from "@/components/SiteAboutMe";
import SiteHero from "@/components/SiteHero";
import SitePortfolio from "@/components/SitePortfolio";
import React from "react";

const PageContent = ({ mediaData }: { mediaData?: TMediaDataTypes[] }) => {
  return (
    <>
      <SiteHero id="home" />
      <SitePortfolio id="portfolio" mediaData={mediaData} />
      <SiteAboutMe id="about-me" />
    </>
  );
};

export default PageContent;
