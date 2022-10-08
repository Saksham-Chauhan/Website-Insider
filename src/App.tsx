import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Blog, Home, ReadMoreBlog, StartProject, Testmonials } from "./pages";

import "./style.css";

export const App = () => {
  return (
    <div className="bg-main-primary">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reviews" element={<Testmonials />} />
        <Route path="/start-project" element={<StartProject />} />
        <Route path="/blog/read-more" element={<ReadMoreBlog />} />
      </Routes>
      <Footer />
    </div>
  );
};
