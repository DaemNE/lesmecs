import React from "react";

export const VideoComponent = ({ vimeolink, showVideo }) => {
  return (
    <video
      key={Math.random()}
      width="900"
      height="580"
      controls
      style={{ display: showVideo ? "block" : "none", position: "fixed" }}
    >
      <source src={vimeolink} type="video/mp4" />
    </video>
  );
};
