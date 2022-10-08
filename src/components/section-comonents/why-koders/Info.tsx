import React, { ReactNode } from "react";

interface Props {
  stat: string;
  title: string;
  children: ReactNode;
  className: string;
}

const Info = ({ stat, children, title, className }: Props) => {
  return (
    <div className={`w-1/4 ${className}`}>
      <p className="text-center text-main-teal text-[10rem] leading-none">
        {stat}
      </p>
      <p className="text-center text-white text-[18px] my-1">{title}</p>
      {children}
    </div>
  );
};

export default Info;
