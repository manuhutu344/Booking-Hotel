import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function Layout() {
  return (
    <div className='p-4'>
    <Nav />
    <Outlet />
    </div>
  )
}

export default Layout