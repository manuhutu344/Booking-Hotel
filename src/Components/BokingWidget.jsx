import React from 'react'

function BokingWidget({place}) {
  return (
    <div className='bg-white shadow p-4 rounded-2xl'>
    <div className='text-2xl text-center'>
    Harga: Rp.{place.price} Per Malam
    </div>
    <div className='border rounded-2xl mt-4'>
    <div className='flex'>
    <div className='py-3 px-4'>
    <label>Check in:</label>
    <input type='date' />
    </div>
    <div className='py-3 px-4 border-l'>
    <label>Check out:</label>
    <input type='date' />
    </div>
    </div>
    <div>
    <div className='py-3 px-4 border-t'>
    <label>Jumlah Pengunjung:</label>
    <input type='number' value={1} />
    </div>
    </div>
    </div>
    <button className='primary mt-4'>
    Boking tempat ini
    </button>
    </div>
  )
}

export default BokingWidget