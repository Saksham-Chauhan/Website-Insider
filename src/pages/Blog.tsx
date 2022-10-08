import React from "react";
import { Card, Divider, GradientText, MainCard } from "../components";

const Blog = () => {
  return (
    <div className="pb-10 pt-28 w-[90%] mx-auto">
      <GradientText
        className="text-[45px] text-center bg-gradient-to-r from-white to-main-teal"
        text="Blogs"
      />
      <MainCard />
      <div className="flex gap-10 my-10">
        {[1, 2, 3].map((item) => (
          <Card key={item} />
        ))}
      </div>
      <Divider className="mt-20" />
      <GradientText
        className="text-[45px] text-center bg-gradient-to-r from-white to-main-teal"
        text="Wish your blog was here too?"
      />
      <p className="text-main-light_white text-center">
        Submit your blog. Write to us at{" "}
        <span className="text-main-teal">info@koders.in</span>{" "}
      </p>
    </div>
  );
};

export default Blog;
