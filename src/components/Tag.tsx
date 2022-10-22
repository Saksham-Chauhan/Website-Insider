import React from "react";
import { tag } from "../assets";

const Tag = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div
      className={`flex py-[2px] px-2 justify-between items-center bg-main-teal rounded-md font-miligramTextMedium text-[8px] sm:text-[10px] ${className}`}
    >
      <img src={tag} alt="" className="h-[10px] mr-1" />
      {text}
    </div>
  );
};

export default Tag;
