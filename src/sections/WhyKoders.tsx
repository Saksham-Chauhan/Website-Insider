import React from "react";
import { GradientText, Info } from "../components";
import { gradientStleObj } from "../helper/style";

const WhyKoders = () => {
  return (
    <div className="py-14 bg-main-secondary">
      <h1 className="text-[35px] text-center font-medium text-white">
        Why trust&nbsp;
        <span
          className="bg-gradient-to-r from-white to-main-teal"
          style={{ ...gradientStleObj }}
        >
          Koders
        </span>
        &nbsp;to
        <br />
        <span
          className="bg-gradient-to-r from-white to-main-teal"
          style={{ ...gradientStleObj }}
        >
          Supercharge&nbsp;
        </span>
        your business?
      </h1>
      <div className="flex gap-2 mt-10 w-[85%] mx-auto">
        <Info
          className="text-center border-r-2 border-main-teal"
          title="Company"
          stat="01"
        >
          <p className="mt-2 text-main-light_white text-[16px]">
            Rest assured. Unlike freelancers,
            <span className="text-main-teal">
              we are sticking till completion
            </span>
            .
          </p>
        </Info>
        <Info
          className="text-center border-r-2 border-main-teal"
          title="One Stop Solution"
          stat="02"
        >
          <p className="mt-2 text-main-light_white text-[16px]">
            Design+Frontend+Backend +Testing+QnA+Docs?
            <span className="text-main-teal"> We do it all</span>.
          </p>
        </Info>
        <Info
          className="text-center border-r-2 border-main-teal"
          title="Quality + Satisfaction"
          stat="03"
        >
          <p className="mt-2 text-main-light_white text-[16px]">
            <span className="text-main-teal">Quality </span>
            delivery with 100%
            <span className="text-main-teal"> Satisfaction </span>or 100%
            refund.
          </p>
        </Info>
        <Info className="text-center" title="Your Code, Not Ours." stat="04">
          <p className="mt-2 text-main-light_white text-[16px]">
            We’re giving <span className="text-main-teal">IPR rights</span>, not
            just the source code.
          </p>
        </Info>
      </div>
    </div>
  );
};

export default WhyKoders;
