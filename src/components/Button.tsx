import React from "react";

interface Props {
  className?: string;
  text: string;
  logo?: string;
}
const Button = ({ className, text, logo }: Props) => {
  return (
    <button className={`hover:text-gray-400 cursor-pointer ${className}`}>
      {logo ? <img src={logo} alt="icon" /> : null}
      {text}
    </button>
  );
};

export default Button;
