import { width } from "@mui/system";
import React from "react";
import { GridDesign } from "../components/GridDesign";
import bg from "../resources/images/953aaad1-0800b3e6 00_00_32.76.jpg";

export const ContactPage = () => {
  return (
    <div>
      <img
        src={bg}
        style={{
          backgroundImage: `url(${bg})`,
          height: "100vh",
          width: "100vw",
          marginTop: "-5vh",
          zIndex: -5,
          position: "fixed",
        }}
        alt="background"
      />
      <div
        style={{
          position: "fixed",
          bottom: 0,
          color: "white",
          height: "10vh",
          width: "100vw",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "smaller",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            padding: "2vh",
          }}
        >
          <span>
            LESMECS strives to create long lasting audiovisual productions.
          </span>
          <span>committed to inclusivity, honesty & freshness.</span>
          <span>
            We produce tv commercials, music videos, films & series for
            streaming and TV-channels.
          </span>
          <span>
            Giving a voice to the outcasts, dropouts and overall rare birds.
            Representing +32, from the heart of europe.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            padding: "2vh",
          }}
        >
          <span>7-11</span>
          <span>rue d'alost,</span>
          <span>1000 Brussels,</span>
          <span>Belgium</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            padding: "2vh",
          }}
        >
          <span>salut@lesmecs.be</span>
          <span>rue d'alost,</span>
          <span>1000 Brussels,</span>
        </div>
      </div>
    </div>
  );
};
