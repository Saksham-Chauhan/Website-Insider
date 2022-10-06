import React from "react";
import { aeroUp } from "../assets";
import { GradientText } from "../components";

const Newsletter = () => {
  return (
    <div className="py-10">
      <GradientText
        className="text-[35px] text-center bg-gradient-to-r from-white to-main-teal"
        text="Subscribe to our Newsletter!"
      />
      <p className="text-[18px] w-1/3 mx-auto text-center text-main-light_white py-2">
        Stay updated about the latest offers, insights, blogs, “technical” stuff
        and much more.
      </p>
      <div className="w-1/3 border-2 border-main-teal mx-auto rounded-lg overflow-hidden flex mt-4">
        <input
          type="text"
          className="w-full px-2 outline-none border-none bg-transparent text-white"
          placeholder="Your Email Address"
        />
        <div className="w-14 h-10 bg-main-teal flex justify-center items-center p-4">
          <img
            src={aeroUp}
            alt="aero"
            className="hover:scale-110  cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
