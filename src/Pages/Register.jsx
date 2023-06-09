import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 async function registerUser(e){
    e.preventDefault()
    try {
     await axios.post('/user/register', {
        name,
        email,
        password,
      })
      alert('Akun Anda Berhasil Dibuat')
    } catch (e) {
      alert('Registrasi Gagal Silahkan Coba Lagi')
    }
  }
  return (
    <div className='mt-4 grow flex items-center justify-around'>
    <div className='mb-64'>
    <h1 className='text-4xl text-center mb-4'>Buat Akun Anda</h1>
    <form className='max-w-md mx-auto' onSubmit={registerUser}>
    <input type='text' placeholder='Masukan Nama Anda' value={name} onChange={e => setName(e.target.value)} />
    <input type='email' placeholder='Masukan Email Anda' value={email} onChange={e => setEmail(e.target.value)}/>
    <input type='password' placeholder='Masukan Password Anda' value={password} onChange={e => setPassword(e.target.value)} />
    <button className='primary'>Buat</button>
    <div className='text-center py-2 text-gray-500'>
    Sudah Memiliki Akun?  <Link className='underline text-black' to={'/login'}>
     Login Sekarang
    </Link> 
    </div>
    </form>
    </div>
    </div>
  )
}

export default Register