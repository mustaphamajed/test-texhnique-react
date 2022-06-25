import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './NavBar'


const Layout = () => {
    return (

        <div className='flex-initial w-full '>
            <div >
                <Navbar />
            </div>
            <div className='w-full relative z-0'>
                <Outlet />
            </div>
        </div>

    )
}

export default Layout