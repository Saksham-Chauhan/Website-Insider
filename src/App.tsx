import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home, Testmonials } from "./pages";

import "./style.css";

export const App = () => {
  return (
    <div className="bg-main-primary">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testmonials" element={<Testmonials />} />
      </Routes>
      <Footer />
    </div>
  );
};
