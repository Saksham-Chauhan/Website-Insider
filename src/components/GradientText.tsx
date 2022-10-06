import React from "react";

interface Props {
  className?: string;
  text: string;
}
const GradientText = ({ className, text }: Props) => {
  return (
    <h1 className={`${className}`} style={{ ...stleObj }}>
      {text}
    </h1>
  );
};

export default GradientText;

const stleObj = {
  WebkitTextFillColor: "transparent",
  WebkitBackgroundClip: "text",
};
