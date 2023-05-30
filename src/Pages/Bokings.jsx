import React, { useEffect, useState } from 'react'
import AccountNav from '../Components/AccountNav'
import axios from 'axios'
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
      <div>
      <div>
      <PlaceImg place={booking.place} />
      </div>
      {booking.checkIn}  {booking.checkOut}
      </div>
    ))}
    </div>
    </div>
  )
}

export default Bokings