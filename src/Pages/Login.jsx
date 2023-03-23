import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../Components/UserContext'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const {setUser} = useContext(UserContext)
  async function handleLoginSubmit(e){
    e.preventDefault()
    try {
      const {data} =  await axios.post('/user/login', {email, password})
      setUser(data)
      alert('Login Berhasil')
      setRedirect(true)
    } catch (e) {
      alert('Login Gagal')
    }
  }

  if(redirect){
    return <Navigate to={'/'} />
  }

  return (
    <div className='mt-4 grow flex items-center justify-around'>
    <div className='mb-64'>
    <h1 className='text-4xl text-center mb-4'>Login Ke Akun Anda</h1>
    <form className='max-w-md mx-auto' onSubmit={handleLoginSubmit}>
    <input type='email' placeholder='Masukan Email Anda' value={email} onChange={e => setEmail(e.target.value)} />
    <input type='password' placeholder='Masukan Password Anda' value={password} onChange={e => setPassword(e.target.value)} />
    <button className='primary'>Login</button>
    <div className='text-center py-2 text-gray-500'>
    Jika Tidak Memiliki Akun.  <Link className='underline text-black' to={'/buat'}>
    Buat Akun Sekarang
    </Link> 
    </div>
    </form>
    </div>
    </div>
  )
}

export default Login