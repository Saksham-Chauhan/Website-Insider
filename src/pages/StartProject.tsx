import React from "react";
import { add } from "../assets";
import {
  Button,
  ButtonsGroup,
  Divider,
  Form,
  GradientText,
} from "../components";
import { typeOfProjects } from "../helper/constant";

const StartProject = () => {
  const handleClick = (type: string) => {
    console.log(type);
  };
  return (
    <div className="py-28 w-[85%] mx-auto">
      <GradientText
        className="text-[45px] text-center bg-gradient-to-r from-white to-main-teal"
        text="Start your project"
      />
      <Divider className="mt-10" />
      <ButtonsGroup buttonsArray={[...typeOfProjects.slice(0, 5)]} />
      <Divider className="mt-6" />
      <ButtonsGroup
        buttonsArray={[...typeOfProjects.slice(5, typeOfProjects?.length)]}
      />
      <Divider className="mt-10" />
      <Form />
    </div>
  );
};

export default StartProject;
