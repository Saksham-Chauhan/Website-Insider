import React from "react";
import { aeroDown } from "../../../assets";

// interface SelectBox {
//   placeholder: string;
//   isSelect: boolean;
//   handleSelect: (data: any) => void;
//   list: Array<string>;
// }
// { placeholder, isSelect, handleSelect, list }: SelectBox

const InputBox = () => {
  return (
    <div className="flex gap-2 items-center border-b-2 border-main-light_white w-full p-1">
      <input
        type="text"
        placeholder="Estimated Budget *"
        className="bg-transparent border-none outline-none text-main-light_white w-full"
      />
      <img
        src={aeroDown}
        alt="show"
        className="h-3 w-3 mr-2 cursor-pointer hover:brightness-75"
      />
    </div>
  );
};

export default InputBox;
