import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { getReviewList } from "../helper/scrapper";

import {
  Button,
  Divider,
  Footer,
  GradientText,
  Navbar,
  TestmonialCard,
} from "../components";
import axios from "axios";

export const getServerSideProps = async (context) => {
  try {
    const res = await axios.get("http://localhost:3000/api");
    const data = res ? JSON.parse(JSON.stringify(res.data)) : null;
    return {
      props: { reviewsArray: data },
    };
  } catch (error) {
    return {
      props: { reviewsArray: null },
    };
  }
};

const Testmonials = ({ reviewsArray }) => {
  const [reviewsData, setReviewsData] = useState<any>(reviewsArray);

  const cardInaColumn = Math.round(reviewsData?.reviews?.length / 3);
  const rowOne = reviewsData?.reviews?.slice(0, cardInaColumn - 2);

  const rowTwo = reviewsData?.reviews?.slice(
    cardInaColumn - 2,
    cardInaColumn * 2 - 3
  );
  const rowThree = reviewsData?.reviews?.slice(
    cardInaColumn * 2 - 3,
    reviewsData?.reviews?.length
  );
  const router = useRouter();
  const handleNavigate = (href: string) => {
    router.push(href);
  };
  useEffect(() => {
    setTimeout(() => {
      window?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }, []);

  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Reviews</title>
      </Head>
      <Navbar />
      <div className="pb-10 pt-28">
        <GradientText
          className="text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.5rem] md:text-[2.8rem] mt-10 w-[90%] mx-auto text-center bg-gradient-to-r from-white to-main-teal"
          text="Don't just take our word for it."
        />
        <p className="text-main-light_white text-center w-[90%] sm:w-[60%] mx-auto text-[0.8rem] sm:text-[1.3rem]">
          Take a look at what some of our customers have to say about Koders.
        </p>
        <Divider className="mt-4 md:mt-14" />
        <div className=" w-[90%] lg:w-[85%] xl:w-[80%] mx-auto flex justify-center flex-wrap md:flex-nowrap gap-5 xl:gap-7 bg-main-primary pt-4 pb-8 xxl:w-[63%]">
          {!reviewsData?.reviews?.length ? (
            <div>
              <p className="text-white text-lg">
                Unable to load data please refresh the page.
              </p>
            </div>
          ) : (
            <>
              <div className="w-full md:w-1/3">
                {rowOne?.map((item, i) => (
                  <TestmonialCard
                    key={i}
                    {...{
                      description: item.snippet,
                      logo: item.user.thumbnail,
                      title: item.user.name,
                      rating: item.rating,
                      link: item.user.link,
                    }}
                  />
                ))}
              </div>
              <div className="w-full md:w-1/3">
                {rowTwo?.map((item, i) => (
                  <TestmonialCard
                    key={i}
                    {...{
                      description: item.snippet,
                      logo: item.user.thumbnail,
                      title: item.user.name,
                      rating: item.rating,
                      link: item.user.link,
                    }}
                  />
                ))}
              </div>
              <div className="w-full md:w-1/3">
                {rowThree?.map((item, i) => (
                  <TestmonialCard
                    key={i}
                    {...{
                      description: item.snippet,
                      logo: item.user.thumbnail,
                      title: item.user.name,
                      rating: item.rating,
                      link: item.user.link,
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <Button
          OnClick={() => handleNavigate("StartProject")}
          text="Get Started"
          className="mx-auto block mt-14 bg-main-greenOpt-200 font-miligramMedium text-main-lightTeal py-[10px] px-9 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
        />
        <Divider className="mt-16 py-2" />
      </div>
      <Footer />
    </div>
  );
};

export default Testmonials;
