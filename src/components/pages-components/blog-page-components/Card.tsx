import React from "react";
import { blogCard, blogProfile } from "../../../assets";
import Divider from "../../Divider";

const Card = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <img src={blogCard} alt="card" className="w-full" />
      <Divider className="mt-6" />
      <h1 className="text-white">
        What to know before taking your business online?
      </h1>
      <Divider className="mt-6" />
      <span className="text-[14px] text-main-teal">
        Web Development &nbsp;&nbsp; App Development
      </span>
      <Divider className="mt-6" />
      <p className="text-main-light_white text-[15px]">
        Hello Mighty Creator, I am sure you have a great idea about taking your
        business online. Maybe you don’t know where to start? But you need an
        online presence for your business to increase marketing and create a
        loyal customer base.A website consists of web pages which are easy to
        share and most browsers have a...
      </p>
      <button className="border-b-2 border-main-teal text-main-teal cursor-pointer text-[13px]">
        Read More
      </button>
      <div className="flex mt-14 justify-between items-center">
        <span className=" text-white block">SEP 6, 2022</span>
        <img src={blogProfile} alt="profile" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Card;
