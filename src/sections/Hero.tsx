import React from "react";
import { GradientText } from "../components";

const Hero = () => {
  return (
    <div className="bg-main-primary pt-28">
      <h1 className="leading-[25px] text-[45px] text-white text-center m-0 p-0 li">
        Infrastructure for
      </h1>
      <GradientText
        className="text-[45px] text-center bg-gradient-to-r from-white to-main-teal"
        text="High Quality Applications"
      />
      <p className="text-center text-main-light_white pt-6 pb-28">
        WEBSITES | MOBILE APPS | TOOLBOTS | MONITORS | UI/UX
      </p>
    </div>
  );
};

export default Hero;
