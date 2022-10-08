import React from "react";
import { gradientStleObj } from "../helper/style";

interface Props {
  className?: string;
  text: string;
}
const GradientText = ({ className, text }: Props) => {
  return (
    <h1 className={`${className} font-medium`} style={{ ...gradientStleObj }}>
      {text}
    </h1>
  );
};

export default GradientText;
