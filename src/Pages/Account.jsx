import React, { useContext, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Loading from '../Components/Loading'
import { UserContext } from '../Components/UserContext'
import axios from 'axios'

function Account() {
    const [redirect, setRedirect] = useState(null)
    const {ready, user, setUser} = useContext(UserContext)

    let {subpage} = useParams()
    if (subpage === undefined){
      subpage = 'akun'
    }

    async function logout(){
      await axios.post('/user/logout')
      setRedirect('/')
      setUser(null)
    }

    if(!ready){
        return <center className='mt-11'><Loading /></center>
    }

    if(ready && !user && !redirect){
        return <Navigate to={'/login'} />
    }

    

    function linkClasses(type=null){
      let classes =  'py-2 px-6'
      if (type === subpage){
        classes = 'bg-primary text-white rounded-full'
      }
      return classes
    }

    if(redirect){
      return <Navigate to={redirect} />
    }

  return (
    <div>
    <nav className='w-full flex justify-center mt-8 gap-2 mb-8'>
    <Link className= {linkClasses('akun')} to={'/akun'}>Profil Saya</Link>
    <Link className={linkClasses('bookings')} to={'/akun/bookings'}>Bookingan Saya</Link>
    <Link className= {linkClasses('akomodasi')} to={'/akun/akomodasi'}>Akomodasi Saya</Link>
    </nav>
    {subpage === 'akun' && (
      <div className='text-center max-w-lg mx-auto'>
      Selamat Datang {user.name} ({user.email})<hr />
      <button onClick={logout} className='primary max-w-sm mt-2'>Keluar</button>
      </div>
    )}
    </div>
  )
}

export default Account