import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, GradientText, ReviewBox } from "../components";
import { sleep } from "../helper";
import { TestmonialData, testmonialLogo } from "../helper/constant";

const Testmonials = () => {
  const isRunning = useRef(false);
  const [currentItem, setCurrentItem] = useState<TestmonialData>(
    testmonialLogo[0]
  );
  const navigate = useNavigate();

  function handleClick() {
    navigate("/reviews");
  }

  useEffect(() => {
    const startAnimation = async () => {
      for (let i = 0; i < testmonialLogo.length; i++) {
        setCurrentItem(testmonialLogo[i]);
        await sleep(2000);
      }
      startAnimation();
    };
    if (!isRunning.current) {
      isRunning.current = true;
      startAnimation();
    }
  });
  return (
    <div className="py-10">
      <GradientText
        className="text-[35px] text-center bg-gradient-to-r from-white to-main-teal"
        text="Don’t just take our word for it."
      />
      <p className="text-[18px] w-1/3 mx-auto text-center text-main-light_white py-5">
        Take a look at what a few of our most successful customers have to say
        about Koders.
      </p>
      <ReviewBox
        {...{
          logo: currentItem.logo,
          description: currentItem.description,
          title: currentItem.title,
        }}
      />
      <div className="w-1/4 mx-auto flex items-center justify-between">
        {testmonialLogo.map((item, i) => (
          <div key={i} className="w-12 h-12">
            <img src={item.logo} alt="logo" className="w-full h-full" />
          </div>
        ))}
      </div>
      <Button
        OnClick={handleClick}
        text="Read more"
        className="mx-auto block mt-10 bg-main-greenOpt-200 text-main-greenOpt-1000 py-2 px-8 rounded-lg border-2 border-main-greenOpt-1000 hover:bg-main-greenOpt-1000 hover:text-white"
      />
    </div>
  );
};

export default Testmonials;
