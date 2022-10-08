import React from "react";
import { useNavigate } from "react-router-dom";
import { img1, logo, mobileLogo } from "../assets";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();
  function navToHome() {
    navigate("/");
  }
  return (
    <div className="flex w-full z-10 bg-main-black-700 justify-between align-middle lg:px-10 text-white py-6 md:px-3 fixed top-0 backdrop-blur-md">
      <div className="lg:w-1/3 md:w-1/5 sm:w-1/3">
        <img
          src={logo}
          alt="logo"
          className="hidden lg:block h-10 cursor-pointer"
          onClick={navToHome}
        />
        <img
          src={mobileLogo}
          alt="logo"
          className="lg:hidden md:visible cursor-pointer"
          onClick={navToHome}
        />
      </div>
      <div className="justify-center align-middle  lg:w-1/3 md:w-1/2 md:flex hidden">
        <Button OnClick={() => {}} text="Pricing" />
        <Button
          OnClick={() => {
            navigate("/blog");
          }}
          text="Blog"
          className="lg:mx-11 md:mx-5"
        />
        <Button OnClick={() => {}} text="Portfolio" />
      </div>
      <div className="flex justify-end align-middle  lg:w-1/3 md:w-1/2 sm:w-2/2">
        <Button
          OnClick={() => {}}
          text="Join Discord"
          className="mr-3 md:mr-6 border-2 bg-main-blueOpt-200 border-main-blueOpt-1000 text-main-blueOpt-1000 px-5 md:px-3 rounded-lg hover:bg-main-blueOpt-1000 hover:text-white"
        />
        <Button
          OnClick={() => {
            navigate("start-project");
          }}
          text="Get Started"
          className="bg-main-greenOpt-200 border-2 border-main-greenOpt-1000 text-main-greenOpt-1000 px-5 md:px-3 rounded-lg hover:bg-main-greenOpt-1000 hover:text-white"
        />
      </div>
    </div>
  );
};

export default Navbar;
