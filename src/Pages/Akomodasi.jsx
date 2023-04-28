import React  from 'react'
import {Link} from 'react-router-dom'
import AccountNav from '../Components/AccountNav'

function Akomodasi() {
  return (
    <div>
    <AccountNav />
      <div className= 'text-center'>
      Daftar Semua Tempat Yang Ditambahkan
      <br />
    <Link className='inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full' to={'/akun/akomodasi/new'}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
    Tambahkan Akomodasi Baru Anda
    </Link>
    </div>
    </div>
  )
}

export default Akomodasi