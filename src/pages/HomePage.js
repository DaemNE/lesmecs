import React, { useState, useEffect } from "react";
import img1 from "../resources/images/_alcohol_is_great__for_gimber (1080p) 00_00_46.09.jpg";
import img2 from "../resources/images/Art__Wiels__(ad_for_visit.brussels) 00_00_07.98.jpg";
import img3 from "../resources/images/doliprane_dc_—_menna_eldiaby (1080p) 00_00_06.32.jpg";
import img4 from "../resources/images/tamino___angèle_-_sunflower_(official_music_video) (2160p) 00_01_02.32.jpg";
import { VideoComponent } from "../components/VideoComponent";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Icon } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

const imageStyle = {
  height: "calc(100vh/6*4)",
  width: "calc(100vw/11*7)",
};

const nextAndBeforeImageStyle = {
  height: "calc(100vh/6*2)",
  width: "calc(100vw/11*3)",
};

const imageData = [
  {
    name: "Alcohol is great, gimber",
    vimeoSource:
      "https://player.vimeo.com/progressive_redirect/playback/819060548/container/8803bfcb-fcfc-49a0-b82d-ea5fb85d79ad/a42a1308-4b3f936d?expires=1683120867&loc=external&log_user=0&signature=524736af6929c6db879b76994e16b31e04004848766bcf00b6846daa1f84eaa4",
    stillSource: img1,
    by: "jasper flikschuh",
  },
  {
    name: "Art is everywhere, visit.brussels",
    vimeoSource:
      "https://player.vimeo.com/progressive_redirect/playback/819054819/container/3251204c-a60f-4f79-b978-05b628a48445/1a8b9478-c56bd496?expires=1683119393&loc=external&log_user=0&signature=c51067044c7cd2ffe08dd0c9b2ad93d32a322ed58dd7cdcadd1c524c6a44c9f1",
    stillSource: img2,
    by: "eduard valette",
  },
  {
    name: "Doliprane",
    vimeoSource:
      "https://player.vimeo.com/progressive_redirect/playback/822276878/container/b46f8d0f-288d-4c78-9e5a-1b7438746d0e/fd0e0507-535f4477?expires=1683119363&loc=external&log_user=0&signature=64217a5ec9b4521fcf1e545dea947ecb23c7e972421274ef2e6a229826420d1e",
    stillSource: img3,
    by: "menna eldiaby",
  },
  {
    name: "sunflower, Tamino & angèle ",
    vimeoSource:
      "https://player.vimeo.com/progressive_redirect/playback/801376396/container/ea4c7a08-1a0d-4056-b9c4-7f83d7fc4e03/2570f47d-17513871?expires=1683119197&loc=external&log_user=0&signature=06de1077f021b6713a8e20b9f4d26df03b06bedc185050826037e4319bbe779d",
    stillSource: img4,
    by: "ramy, bastiaan & jonathan",
  },
];

export const HomePage = () => {
  const [carrouselIndex, setCarrouselIndex] = useState(2);
  const [display, setDisplay] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  document.onkeydown = (e) => {
    e = e || window.event;
    if (e.key === "ArrowUp") {
    } else if (e.key === "ArrowDown") {
    } else if (e.key === "ArrowLeft") {
      if (carrouselIndex < 3) {
        setCarrouselIndex(carrouselIndex + 1);
      }
    } else if (e.key === "ArrowRight") {
      if (carrouselIndex > 0) {
        setCarrouselIndex(carrouselIndex - 1);
      }
    }
    if (e.key === "Escape") {
      setShowVideo(false);
    }
  };

  return (
    <div
      key={Math.random()}
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        marginTop: "-5vh",
        border: "none",
      }}
    >
      <div
        style={{
          position: "fixed",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          setShowVideo(true);
        }}
      >
        <PlayArrow fontSize="large" />
      </div>
      <img
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          zIndex: -2,
          filter: "blur(5px)",
          transform: "scale(1.1)",
        }}
        src={imageData[carrouselIndex].stillSource}
        alt="background-blur"
      ></img>
      <img
        src={imageData[carrouselIndex].stillSource}
        alt="main-focus"
        style={imageStyle}
      />

      <VideoComponent
        vimeolink={imageData[carrouselIndex].vimeoSource}
        showVideo={showVideo}
      />

      {carrouselIndex < 3 ? (
        <img
          style={nextAndBeforeImageStyle}
          src={imageData[carrouselIndex + 1].stillSource}
          onClick={() => {
            setCarrouselIndex(carrouselIndex + 1);
          }}
          alt="next-blurred"
          className="beforeImage"
        ></img>
      ) : null}
      {carrouselIndex > 0 ? (
        <img
          style={nextAndBeforeImageStyle}
          src={imageData[carrouselIndex - 1].stillSource}
          onClick={() => {
            setCarrouselIndex(carrouselIndex - 1);
          }}
          alt="before-blurred"
          className="afterImage"
        ></img>
      ) : null}
    </div>
  );
};
