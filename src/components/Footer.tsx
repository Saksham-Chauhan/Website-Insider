import React from "react";
import { discord, github, linkedin, logo, twitter } from "../assets";
import { footerButtons } from "../helper/constant";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center  px-20 py-10 bg-main-secondary">
        <div className="w-1/4">
          <img src={logo} alt="logo" className="h-10" />
          <div className="flex items-center my-3">
            {[linkedin, github, twitter, discord].map((item, i) => (
              <img
                src={item}
                alt={item}
                key={i}
                className="h-7 mr-2 cursor-pointer hover:transition-all transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              />
            ))}
          </div>
          <p className="text-main-light_white mt-4">
            House No 111, New Mohanpur <br /> Colony, Prem Nagar, Dehradun,
            <br /> Uttarakhand - 248007
            <br />
            <br /> 0135-3504103
          </p>
        </div>
        <div className="flex justify-center  w-3/4 pl-20">
          {footerButtons.map((item, i) => {
            return (
              <div className="w-1/4" key={i}>
                <p className="text-white text-[20px]">{item.title}</p>
                {item.buttons.map((item, i) => (
                  <p
                    key={i}
                    className="text-main-light_white mt-3 cursor-pointer hover:text-white w-fit"
                  >
                    {item}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <p className="py-5 text-main-light_white text-center">
        Copyright ©2022 | Koders. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
