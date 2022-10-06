import React from "react";
import { Footer, Navbar } from "../components";
import { Hero, Newsletter, Testmonials } from "../sections";

const Home = () => {
  return (
    <div>
      <Hero />
      <Testmonials />
      <Newsletter />
    </div>
  );
};

export default Home;
