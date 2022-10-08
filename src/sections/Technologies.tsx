import React from "react";
import { GradientText } from "../components";
import { polygonStyle } from "../helper/style";

const Technologies = () => {
  return (
    <div className="bg-main-secondary py-14">
      <GradientText
        className="text-[35px] text-center bg-gradient-to-r from-white to-main-teal"
        text="Technologies that make sense"
      />
      <div className="mt-10">
        <div
          className="h-24 w-24 mx-auto relative box-content border-2 border-x-main-teal border-y-transparent before:content-[''] before:absolute before:h-0 before:w-0 before:-top-12 before:-left-4 before:border-2 before:border-b-2 before:border-main-teal"
          // style={{ ...polygonStyle }}
        ></div>
      </div>
    </div>
  );
};

export default Technologies;
