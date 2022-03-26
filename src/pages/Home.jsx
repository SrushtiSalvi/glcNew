import {
  EsteemedRecruiters,
  HeroSection,
  NoticeSection,
} from "../components/Home";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log(document.getElementById("bottomBar").offsetHeight);
  }, []);

  return (
    <main className="pb-16">
      <HeroSection />
      <NoticeSection />
      <EsteemedRecruiters />
    </main>
  );
};

export default Home;
