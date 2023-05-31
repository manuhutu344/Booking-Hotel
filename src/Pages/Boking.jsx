import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddressLink from '../Components/AddressLink'
import PlaceGalery from '../Components/PlaceGalery'
import BookingDate from '../Components/BookingDate'

function Boking() {
    const {id} = useParams()
    const [booking, setBooking] = useState(null)
    useEffect(()=>{
      if(id){
        axios.get('/post/bokings').then(response =>{
        const foundbooking = response.data.find(({_id})=>_id === id)
        if(foundbooking){
          setBooking(foundbooking)
        }
        })
      }
    },[id])
    if(!booking){
      return ''
    }

  return (
    <div className='my-8'>
    <h1 className='text-3xl'>{booking.place.title}</h1>
    <AddressLink className='my-2 block'>{booking.place.address}</AddressLink>
    <div className='bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between'>
    <div>
    <h2 className='text-2xl mb-4'>Informasi Tentang Bokingan Anda:</h2>
    <BookingDate booking={booking} />
    </div>
    <div className='bg-primary p-6 text-white rounded-2xl'>
   <div>Total Semua :</div>
   <div className='text-3xl'>RP.{booking.place.price}</div>
    </div>
    </div>
    <PlaceGalery place={booking.place} />
    </div>
  )
}

export default Boking