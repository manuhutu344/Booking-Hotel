import React, { useContext, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Loading from '../Components/Loading'
import { UserContext } from '../Components/UserContext'
import axios from 'axios'
import Akomodasi from './Akomodasi'
import AccountNav from '../Components/AccountNav'

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

    if(redirect){
      return <Navigate to={redirect} />
    }

  return (
    <div>
    <AccountNav />
    {subpage === 'akun' && (
      <div className='text-center max-w-lg mx-auto'>
      Selamat Datang {user.name} ({user.email})<hr />
      <button onClick={logout} className='primary max-w-sm mt-2'>Keluar</button>
      </div>
    )}
    {subpage === 'akomodasi' && (
      <Akomodasi />
    )}
    </div>
  )
}

export default Account