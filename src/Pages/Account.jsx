import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../Components/UserContext'

function Account() {
    const {ready, user} = useContext(UserContext)

    if(!ready){
        return 'Tuggu Dulu Brooo ....'
    }

    if(ready && !user){
        return <Navigate to={'/login'} />
    }
  return (
    <div>
    <nav className='w-full flex justify-center mt-8 gap-2'>
    <Link className='py- px-6 bg-primary text-white rounded-full' to={'/akun'}>Profil Saya</Link>
    <Link className='py- px-6' to={'/akun/bookings'}>Bookingan Saya</Link>
    <Link className='py- px-6' to={'/akun/akomodasi'}>Akomodasi Saya</Link>
    </nav>
    </div>
  )
}

export default Account