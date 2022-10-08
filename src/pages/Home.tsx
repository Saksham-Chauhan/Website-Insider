import React from "react";
import { Footer, Navbar } from "../components";
import {
  Clients,
  Hero,
  Newsletter,
  Technologies,
  Testmonials,
  WhyKoders,
} from "../sections";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyKoders />
      <Clients />
      <Technologies />
      <Testmonials />
      <Newsletter />
    </div>
  );
};

export default Home;
