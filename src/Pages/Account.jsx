import React, { useContext } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Loading from '../Components/Loading'
import { UserContext } from '../Components/UserContext'

function Account() {
    const {ready, user} = useContext(UserContext)

    if(!ready){
        return <center className='mt-11'><Loading /></center>
    }

    if(ready && !user){
        return <Navigate to={'/login'} />
    }

    let {subpage} = useParams()
    if (subpage === undefined){
      subpage = 'akun'
    }

    function linkClasses(type=null){
      let classes =  'py-2 px-6'
      if (type === subpage){
        classes = 'bg-primary text-white rounded-full'
      }
      return classes
    }

  return (
    <div>
    <nav className='w-full flex justify-center mt-8 gap-2'>
    <Link className= {linkClasses('akun')} to={'/akun'}>Profil Saya</Link>
    <Link className={linkClasses('bookings')} to={'/akun/bookings'}>Bookingan Saya</Link>
    <Link className= {linkClasses('akomodasi')} to={'/akun/akomodasi'}>Akomodasi Saya</Link>
    </nav>
    </div>
  )
}

export default Account