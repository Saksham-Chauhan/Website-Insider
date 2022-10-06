import React from "react";
import { indianFlag } from "../assets";
import { TestmonialData } from "../helper/constant";

const ReviewBox = ({ description, logo, title }: TestmonialData) => {
  return (
    <div className="border-2 border-main-teal rounded w-2/3 mx-auto flex items-center justify-center my-10 p-5 bg-main-secondary">
      <div className="w-2/3 text-white py-6 px-9">{description}</div>
      <div className="flex items-center w-1/3">
        <img src={logo} alt="logo" className="mr-6" />
        <p className="text-white text-[18px]">{title}</p>
      </div>
    </div>
  );
};

export default ReviewBox;
