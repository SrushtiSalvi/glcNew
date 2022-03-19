import { HeroSection, NoticeSection } from "../components/Home";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log(document.getElementById("bottomBar").offsetHeight);
  }, []);

  return (
    <main className="pb-14">
      <HeroSection />
      <NoticeSection />
    </main>
  );
};

export default Home;
