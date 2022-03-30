import {
    EsteemedRecruiters,
    HeroSection,
    NoticeSection,
} from '../components/Home'

import { BottomBar } from '../components/shared'
import Footer from '../components/shared/Footer'
import Options from '../components/Home/Options'
import React from 'react'

const Home2 = () => {
    return (
        <div>
            <HeroSection />
            <Options />
            <NoticeSection />
            <EsteemedRecruiters />
            <BottomBar />
            <Footer />
        </div>
    )
}

export default Home2
