import React from "react";
import { VideoComponent } from "../components/VideoComponent";

export const DirectorsPage = () => {
  return (
    <div>
      <VideoComponent
        vimeolink={
          "https://player.vimeo.com/progressive_redirect/playback/801376396/container/ea4c7a08-1a0d-4056-b9c4-7f83d7fc4e03/2570f47d-17513871?expires=1683119197&loc=external&log_user=0&signature=06de1077f021b6713a8e20b9f4d26df03b06bedc185050826037e4319bbe779d"
        }
      />
    </div>
  );
};
