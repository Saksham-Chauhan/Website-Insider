import React from "react";

interface Props {
  placeholder: string;
  handleChange: (data: any) => void;
  value: string;
  name: string;
  type: string;
  styling?: string;
}

const InputBox = ({
  handleChange,
  name,
  placeholder,
  value,
  styling,
  type,
}: Props) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={(e) => handleChange(e.target)}
      placeholder={placeholder}
      className={`px-1 text-[1.2rem] text-main-light_white mt-5 pb-3 bg-transparent placeholder:tracking-[2px] border-b-2 outline-none border-main-light_white placeholder:text-main-light_white w-full ${styling}`}
    />
  );
};

export default InputBox;
