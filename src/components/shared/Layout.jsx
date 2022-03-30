import React, { useEffect } from 'react'

import { BottomBar } from '.'
import Footer from './Footer'
import MiniFooter from './MiniFooter'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div id="main" className="flex flex-col h-screen justify-between">
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
            <MiniFooter />
            <BottomBar />
        </div>
    )
}

export default Layout
