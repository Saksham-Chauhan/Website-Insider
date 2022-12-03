import Image from "next/image";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
// import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { PropagateLoader } from "react-spinners";
import AOS from "aos";

import "aos/dist/aos.css";

import { sleep } from "../helper";
import { TestmonialData, testmonialLogo } from "../helper/constant";
import { Button, Divider, GradientText, ReviewBox } from "../components";

let timer = 0;
let index = 0;
const Testmonials = () => {
  const isRunning = useRef(false);
  const [currentItem, setCurrentItem] = useState<TestmonialData>(
    testmonialLogo[0]
  );
  const router = useRouter();
  const handleNavigate = (href: string) => {
    router.push(href);
  };

  useEffect(() => {
    const startAnimation = async () => {
      if (timer < 5) {
        timer += 1;
      } else {
        timer = 0;
        if (!(index < testmonialLogo.length)) {
          index = 0;
        }
        setCurrentItem(testmonialLogo[index]);
        index += 1;
      }
      await sleep(1000);
      startAnimation();
    };
    if (!isRunning.current) {
      isRunning.current = true;
      startAnimation();
    }
  });

  useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <div className="py-16 xxl:py-[10rem] relative">
      <Divider className="mt-5 xl:my-10" />
      <GradientText
        aos="slide-right"
        className="w-[90%]  leading-none mb-3 md:mb-0 md:leading-normal mx-auto sm:w-fit text-[2rem] sm:text-[3rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="Don’t just take our word for it."
      />
      <p
        data-aos="slide-left"
        className="text-[0.8rem] leading-none m-1 sm:text-[1.3rem] w-[80%] sm:w-1/2  lg:w-1/3 mx-auto text-center text-main-light_white font-miligramText400"
      >
        Take a look at what a few of our most successful customers have to say
        about Koders.
      </p>
      <Divider className="mt-7 md:mt-0" />
      <ReviewBox
        {...{
          logo: currentItem?.logo,
          description: currentItem?.description,
          title: currentItem?.title,
          animationStyle: "animate-fadeOut",
          testmonialLogo: testmonialLogo,
        }}
      />
      <div className="w-[60%] sm:w-1/4 mx-auto flex items-center gap-4  sm:gap-7 xxl:gap-9 justify-center  mt-7 sm:mt-0">
        {testmonialLogo.map((item, i) => (
          <div
            onClick={() => {
              timer = 0;
              index = i;
              setCurrentItem(item);
            }}
            key={i}
            className="w-8 sm:w-12 rounded-full cursor-pointer"
            style={
              currentItem?.title === item.title
                ? { boxShadow: "0px 0px 11px 2px #38D8CC" }
                : {}
            }
          >
            <Image
              src={item.logo}
              alt="logo"
              style={{
                opacity: item.title === currentItem?.title ? "0,.5" : 1,
              }}
              className={`w-full h-full`}
            />
          </div>
        ))}
      </div>
      <Button
        OnClick={() => handleNavigate("Testmonials/#footer")}
        text="Read More"
        className="text-[0.8rem] xxl:text-[1rem] mx-auto block mt-8 sm:mt-12 bg-main-greenOpt-200 font-miligramMedium text-main-lightTeal py-[8px] sm:py-[10px] px-6 sm:px-9 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
      />
      <Divider className="xl:my-10" />
    </div>
  );
};

export default Testmonials;
