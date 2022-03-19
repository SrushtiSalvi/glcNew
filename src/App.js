import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllPosts from "./pages/AllPosts";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="allposts" element={<AllPosts />} />
        <Route path="contactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
