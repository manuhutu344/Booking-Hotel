import React from 'react'

function Login() {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
    <div className='mb-64'>
    <h1 className='text-4xl text-center mb-4'>Login Ke Akun Anda</h1>
    <form className='max-w-md mx-auto'>
    <input type='email' placeholder='Masukan Email Anda'  />
    <input type='password' placeholder='Masukan Password Anda' />
    <button className='primary'>Login</button>
    </form>
    </div>
    </div>
  )
}

export default Login