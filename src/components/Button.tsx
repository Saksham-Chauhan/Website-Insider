import React, { useState } from "react";

interface Props {
  className?: string;
  text: string;
  logo?: string;
  OnClick: () => void;
}
const Button = ({ className, text, logo, OnClick }: Props) => {
  const [iconStyle, setIconStyle] = useState("");
  return (
    <button
      onClick={OnClick}
      className={`hover:text-gray-400 cursor-pointer flex items-center justify-center ${className}`}
      onMouseEnter={() => setIconStyle("brightness-50")}
      onMouseLeave={() => setIconStyle("")}
    >
      {logo ? (
        <img
          src={logo}
          alt="icon"
          className={`h-5 mr-2 hover:brightness-75 ${iconStyle}`}
        />
      ) : null}
      {text}
    </button>
  );
};

export default Button;
