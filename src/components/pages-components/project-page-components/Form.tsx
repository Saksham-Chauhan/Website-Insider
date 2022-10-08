import React from "react";
import Divider from "../../Divider";

import InputBox from "./InputBox";

const Form = () => {
  return (
    <form className="w-[97%] mx-auto mt-10">
      <label htmlFor="" className="text-main-light_white">
        Please tell us a bit about your project <span className="ml-1">*</span>
      </label>
      <input
        type="text"
        className="mt-2 bg-transparent outline-none border-b-2 border-main-light_white block w-full text-main-light_white"
      />
      <Divider className="mt-4" />
      <div className="flex gap-4 mt-2">
        <InputBox /> <InputBox />
      </div>
    </form>
  );
};

export default Form;
