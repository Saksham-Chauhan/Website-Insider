import React from "react";
import { img1, logo, mobileLogo } from "../assets";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between align-middle text-white px-1 py-6 md:px-3">
      <div className="lg:w-1/3 md:w-1/5 sm:w-1/3">
        <img src={logo} alt="logo" className="hidden lg:block" />
        <img src={mobileLogo} alt="logo" className="lg:hidden md:visible" />
      </div>
      <div className="justify-center align-middle  lg:w-1/3 md:w-1/2 md:flex hidden">
        <Button text="Pricing" />
        <Button text="Blog" className="lg:mx-11 md:mx-5" />
        <Button text="Portfolio" />
      </div>
      <div className="flex justify-end align-middle  lg:w-1/3 md:w-1/2 sm:w-2/2">
        <Button
          text="Join Discord"
          className="mr-3 md:mr-6 border-2 border-main-teal text-main-teal px-5 md:px-3 rounded-full hover:bg-main-teal hover:text-white"
        />
        <Button
          text="Get Started"
          className="bg-main-teal border-2 border-main-teal text-white px-5 md:px-3 rounded-full hover:bg-transparent hover:text-main-teal"
        />
      </div>
    </div>
  );
};

export default Navbar;
