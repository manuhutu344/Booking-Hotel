import React from 'react'
import {Link, useParams} from 'react-router-dom'

function Akomodasi() {
  const {action} = useParams()
  return (
    <div>
    {action !== 'new' && (
      <div className= 'text-center'>
    <Link className='inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full' to={'/akun/akomodasi/new'}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
    Tambahkan Akomodasi Baru Anda
    </Link>
    </div>
    )}
    {action === 'new' && (
      <div>
      <form>
      <h2 className='text-2xl mt-4'>Judul</h2>
      <p className='text-gray-500 text-sm'>judul untuk tempat Anda. Harus pendek dan menarik seperti dalam iklan</p>
      <input type='text' placeholder='Masukan Judul' />
      <h2 className='text-2xl mt-4'>Alamat</h2>
      <p className='text-gray-500 text-sm'>Masukan Alamat untuk tempat Anda.</p>
      <input type='text' placeholder='Masukan Alamat Anda' />
      <h2 className='text-2xl mt-4'>Foto</h2>
      <div className='flex gap-2'>
      <input type='text' placeholder={'Tambahkan menggunakan link ....jpg'} />
      <button className='bg-gray-200 px-4 rounded-2xl'>Masukan&nbsp;Foto</button>
      </div>
      <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
      <button className='border bg-transparent rounded-2xl p-8 text-2xl text-gray-600'>+</button>
      </div>
      </form>
      </div>
    )}
    </div>
  )
}

export default Akomodasi