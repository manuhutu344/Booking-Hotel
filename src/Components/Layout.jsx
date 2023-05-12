import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function Layout() {
  return (
    <div className='py-4 px-8 flex flex-col min-h-screen'>
    <Nav />
    <Outlet />
    </div>
  )
}

export default Layout