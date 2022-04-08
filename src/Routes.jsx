import {
    AboutUs,
    AllPosts,
    CVBuilder,
    ContactUs,
    FlagshipEvents,
    Home,
    Recruiters,
    SinglePost,
    StudentsCorner,
} from './pages'
import { Route, Routes } from 'react-router-dom'

import { Layout } from './components/shared'
import React from 'react'
import AllNotices from './pages/AllNotices'
import SingleNotice from './pages/SingleNotice'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Layout />}>
                <Route path="about-us" element={<AboutUs />} />
                <Route path="all-posts" element={<AllPosts />} />
                <Route path="cv-builder" element={<CVBuilder />} />
                <Route path="flagship-events" element={<FlagshipEvents />} />
                <Route path="recruiters" element={<Recruiters />} />
                <Route path="students-corner" element={<StudentsCorner />} />
                <Route path="post/:id" element={<SinglePost />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="all-notices" element={<AllNotices />} />
                <Route path="notice/:id" element={<SingleNotice />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes
