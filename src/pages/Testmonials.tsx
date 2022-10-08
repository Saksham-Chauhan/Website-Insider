import React, { useEffect } from "react";
import { Button, GradientText, TestmonialCard } from "../components";
import { reviews } from "../helper/constant";

const Testmonials = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="pb-10 pt-28">
      <GradientText
        className="text-[45px] text-center bg-gradient-to-r from-white to-main-teal"
        text="Don't just take our word for it."
      />
      <p className="text-main-light_white text-center w-[40%] mx-auto text-[18px]">
        Take a look at what some of our customers have to say about Koders.
      </p>
      <div className="w-[80%] mx-auto flex bg-main-primary pt-4 pb-8">
        <div className="w-1/3">
          {reviews.map((item, i) => (
            <TestmonialCard
              key={i}
              {...{
                description: item.message,
                logo: item.logo,
                title: item.title,
              }}
            />
          ))}
        </div>
        <div className="w-1/3 mx-5">
          {reviews.map((item, i) => (
            <TestmonialCard
              key={i}
              {...{
                description: item.message,
                logo: item.logo,
                title: item.title,
              }}
            />
          ))}
        </div>
        <div className="w-1/3">
          {reviews.map((item, i) => (
            <TestmonialCard
              key={i}
              {...{
                description: item.message,
                logo: item.logo,
                title: item.title,
              }}
            />
          ))}
        </div>
      </div>
      <Button
        OnClick={() => {}}
        text="Get Started"
        className="my-5 bg-main-teal border-2 border-main-teal text-white px-8 py-2 rounded-full hover:bg-transparent hover:text-main-teal block mx-auto"
      />
    </div>
  );
};

export default Testmonials;
