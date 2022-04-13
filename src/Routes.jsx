import {
  AboutUs,
  AllNotices,
  AllPosts,
  CVBuilder,
  ContactUs,
  FlagshipEvents,
  Home,
  Recruiters,
  SingleNotice,
  SinglePost,
  StudentsCorner,
} from './web/pages'
import { Route, Routes } from 'react-router-dom'

import AddNoticePost from './admin/pages/AddNoticePost'
import AddVacancyPost from './admin/pages/AddVacancyPost'
import AdminLayout from './admin/shared/AdminLayout'
import ContactDetails from './admin/pages/ContactDetails'
import Dashboard from './admin/pages/Dashboard'
import EditNoticePost from './admin/pages/EditNoticePost'
import EditVacancyPost from './admin/pages/EditVacancyPost'
import EsteemedRecruiters from './admin/pages/EsteemedRecruiters'
import { Layout } from './web/components/shared'
import { Login } from './admin/pages'
import NoticePosts from './admin/pages/NoticePosts'
import Notices from './admin/pages/Notices'
import PastRecruiters from './admin/pages/PastRecruiters'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import Vacancy from './admin/pages/Vacancy'
import VacancyPosts from './admin/pages/VacancyPosts'

const AllRoutes = () => {
  return (
    <>
      <ToastContainer
        role="alert"
        theme={'dark'}
        newestOnTop
        position="bottom-right"
      />
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
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="vacancy-posts" element={<Vacancy />}>
            <Route path="" element={<VacancyPosts />} />
            <Route path="add" element={<AddVacancyPost />} />
            <Route path="edit/:id" element={<EditVacancyPost />} />
          </Route>
          <Route path="notices" element={<Notices />}>
            <Route path="" element={<NoticePosts />} />
            <Route path="add" element={<AddNoticePost />} />
            <Route path="edit/:id" element={<EditNoticePost />} />
          </Route>
          <Route path="esteemed-recruiters" element={<EsteemedRecruiters />} />
          <Route path="contact-details" element={<ContactDetails />} />
          <Route path="past-recruiters" element={<PastRecruiters />} />
        </Route>
      </Routes>
    </>
  )
}

export default AllRoutes
