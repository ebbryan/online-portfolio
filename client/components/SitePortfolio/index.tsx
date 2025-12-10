"use client";

import React from "react";
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from "../ui/shadcn-io/video-player";

interface ISitePortfolioProps {
  id: TNavItemIDTypes;
  mediaData: TMediaDataTypes[] | undefined;
}

const SitePortfolio = (props: ISitePortfolioProps) => {
  return (
    <section id={props.id} className={`h-screen flex flex-col gap-3 p-6 py-24`}>
      <h1 className="text-4xl text-left font-black">Portfolio</h1>
      <div className="flex flex-wrap gap-2">
        {props.mediaData?.map((data) => (
          <VideoPlayer
            key={data.id}
            className="overflow-hidden rounded-lg border w-64"
          >
            <VideoPlayerContent
              crossOrigin=""
              muted
              preload="auto"
              slot="media"
              src={`http://localhost:8055/assets/${data.id}`}
            />
            <VideoPlayerControlBar>
              <VideoPlayerPlayButton />
              <VideoPlayerTimeRange />
              <VideoPlayerTimeDisplay showDuration />
              <VideoPlayerMuteButton />
              <VideoPlayerVolumeRange />
            </VideoPlayerControlBar>
          </VideoPlayer>
        ))}
      </div>
    </section>
  );
};

export default SitePortfolio;
