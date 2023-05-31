import React, { useEffect, useState } from 'react'
import AccountNav from '../Components/AccountNav'
import axios from 'axios'
import { differenceInCalendarDays, format } from 'date-fns'
import PlaceImg from '../Components/PlaceImg'

function Bokings() {
  const [bookings, setBookings] = useState([])
  useEffect(()=>{
    axios.get('/post/bokings').then(response =>{
      setBookings(response.data)
    })
  },[])
  return (
    <div>
    <AccountNav />
    <div>
    {bookings?.length > 0 && bookings.map(booking => (
      <div className='flex gap-4 bg-gray-200 rounded-2xl overflow-hidder'>
      <div className='w-48'>
      <PlaceImg place={booking.place} />
      </div>
      <div className='py-3 pr-3 grow'>
      <h2 className='text-xl'>
      {booking.place.title}
      </h2>
      <div className='border-t border-gray-300 mt-2 py-2'>
      {format(new Date(booking.checkIn), 'yyyy-MM-dd')} Sampai  {format(new Date(booking.checkOut), 'yyyy-MM-dd')}
      </div>
      <div>
      Total Penginap : {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))}<br/>
     Total Semua RP.{booking.price}
      </div>
      </div>
      </div>
    ))}
    </div>
    </div>
  )
}

export default Bokings