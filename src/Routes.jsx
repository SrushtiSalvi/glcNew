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

import AddVacancyPost from './admin/pages/AddVacancyPost'
import AdminLayout from './admin/shared/AdminLayout'
import Dashboard from './admin/pages/Dashboard'
import EditVacancyPost from './admin/pages/EditVacancyPost'
import Events from './admin/pages/Events'
import { Layout } from './web/components/shared'
import { Login } from './admin/pages'
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
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </>
  )
}

export default AllRoutes
