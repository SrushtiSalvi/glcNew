import {
  EsteemedRecruiters,
  HeroSection,
  NoticeSection,
} from "../components/Home";
import React, { useEffect } from "react";

import { BottomBar } from "../components/shared";
import { FlagshipEvents } from ".";

const Home = () => {
  useEffect(() => {
    console.log(document.getElementById("bottomBar").offsetHeight);
  }, []);

  return (
    <main className="pb-16">
      <HeroSection />
      <NoticeSection />
      <FlagshipEvents />
      <EsteemedRecruiters />
      <BottomBar />
    </main>
  );
};

export default Home;
