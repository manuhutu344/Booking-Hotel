import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
    <div className='mb-64'>
    <h1 className='text-4xl text-center mb-4'>Buat Akun Anda</h1>
    <form className='max-w-md mx-auto'>
    <input type='text' placeholder='Masukan Nama Anda' />
    <input type='email' placeholder='Masukan Email Anda'  />
    <input type='password' placeholder='Masukan Password Anda' />
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