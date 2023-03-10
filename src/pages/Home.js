import React from "react";
import Aside from "../components/Aside/Aside";
import BlogGrid from "../components/BlogGrid/BlogGrid";

const Home = () => {
  return (
    <>
      <section class="wrapper">
        <Aside />
        <BlogGrid />
      </section>
    </>
  );
};

export default Home;
