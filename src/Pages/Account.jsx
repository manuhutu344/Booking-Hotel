import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../Components/UserContext'

function Account() {
    const {ready, user} = useContext(UserContext)

    if(!ready){
        return 'Tunggu Yah...'
    }

    if(ready && !user){
        return <Navigate to={'/login'} />
    }
  return (
    <div>Ini Akun Dari {user?.name}</div>
  )
}

export default Account