import { BottomBar, Footer } from '../components/shared';
import { EsteemedRecruiters, HeroSection, NoticeSection, Options } from '../components/Home';

import React from 'react';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Options />
      <NoticeSection />
      <EsteemedRecruiters />
      <BottomBar />
      <Footer />
    </div>
  );
};

export default Home;
