import React from "react";
import { homeBg, homeBgBottom } from "../assets";
import { Divider, GradientText } from "../components";

const Hero = () => {
  return (
    <div className="bg-main-primary pt-28 relative overflow-hidden">
      <Divider className="mt-36" />
      <img src={homeBg} alt="" className="absolute top-0 left-0 w-96" />
      <img
        src={homeBgBottom}
        alt=""
        className="absolute -bottom-10 right-0 h-80"
      />
      <h1 className="leading-[25px] text-[50px] text-white text-center m-0 p-0 font-medium">
        Infrastructure for
      </h1>
      <GradientText
        className="text-[50px] text-center bg-gradient-to-r from-white to-main-teal"
        text="High Quality Applications"
      />
      <p className="text-center text-main-light_white pt-6 pb-28">
        WEBSITES | MOBILE APPS | TOOLBOTS | MONITORS | UI/UX
      </p>
    </div>
  );
};

export default Hero;
