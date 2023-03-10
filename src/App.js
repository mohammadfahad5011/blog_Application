import React from "react";
import Navbar from "./components/Navbar/Navbar";
import BlogPage from "./pages/BlogPage";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:blogId" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
