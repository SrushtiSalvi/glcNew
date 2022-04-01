import React from "react";
import {
  EsteemedRecruiters,
  NoticeSection,
  HeroSection,
} from "../components/Home";
import Options from "../components/Home/Options";
import { BottomBar } from "../components/shared";
import Footer from "../components/shared/Footer";

const Home2 = () => {
  return (
    <div>
      <HeroSection />
      <Options />
      <NoticeSection />
      <EsteemedRecruiters />
      <BottomBar />
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
};

export default Home2;
