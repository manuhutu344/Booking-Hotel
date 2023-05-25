import React, { useState } from 'react'
import {differenceInCalendarDays} from 'date-fns'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

function BokingWidget({place}) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [numberOfGuests, setNumberOfGuests] = useState(1)
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [redirect, setRedirect] = useState('')
  let numberOfDays = 0
  if(checkIn && checkOut){
    numberOfDays = differenceInCalendarDays(new Date(checkOut), new Date(checkIn))
  }

  async function bookThisPlace(){
    const data = {checkIn, checkOut, numberOfGuests, name, mobile, place:place._id, price: numberOfDays * place.price}
    const response = await axios.post('/post/boking', data)
    const bookingId = response.data._id
    setRedirect(`/akun/bookings/${bookingId}`)
  }

  if(redirect){
    return <Navigate to={redirect} />
  }

  return (
    <div className='bg-white shadow p-4 rounded-2xl'>
    <div className='text-2xl text-center'>
    Harga: Rp.{place.price} Per Malam
    </div>
    <div className='border rounded-2xl mt-4'>
    <div className='flex'>
    <div className='py-3 px-4'>
    <label>Check in:</label>
    <input type='date' value={checkIn} onChange={e => setCheckIn(e.target.value)} />
    </div>
    <div className='py-3 px-4 border-l'>
    <label>Check out:</label>
    <input type='date' value={checkOut} onChange={e => setCheckOut(e.target.value)} />
    </div>
    </div>
    <div>
    <div className='py-3 px-4 border-t'>
    <label>Jumlah Pengunjung:</label>
    <input type='number' value={numberOfGuests} onChange={e => setNumberOfGuests(e.target.value)} />
    </div>
    </div>
    {numberOfDays > 0 && (
      <div className='py-3 px-4 border-t'>
    <label>Nama Lengkap Pemboking:</label>
    <input type='text' value={name} onChange={e => setName(e.target.value)} />

    <label>Nomor Telfon Anda:</label>
    <input type='tel' value={mobile} onChange={e => setMobile(e.target.value)} />
    </div>
    )}
    </div>
    <button onClick={bookThisPlace} className='primary mt-4'>
    Boking tempat ini
    { numberOfDays > 0 && (
      <span>  Dengan Harga RP{numberOfDays * place.price}</span>
    )}
    </button>
    </div>
  )
}

export default BokingWidget