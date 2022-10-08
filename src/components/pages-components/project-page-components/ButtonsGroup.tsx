import React from "react";
import { add } from "../../../assets";
import Button from "../../Button";

interface Props {
  buttonsArray: Array<string>;
}

const ButtonsGroup = ({ buttonsArray }: Props) => {
  const handleClick = (type: string) => {
    console.log(type);
  };
  return (
    <div className="flex">
      {buttonsArray.map((item, i) => (
        <Button
          key={i}
          OnClick={() => handleClick(item)}
          text={item}
          logo={add}
          className="text-white mx-4 border-2 border-main-teal rounded-lg py-2 px-4"
        />
      ))}
    </div>
  );
};

export default ButtonsGroup;
