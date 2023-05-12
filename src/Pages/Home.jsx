import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [places, setPlaces] = useState([])
  useEffect(()=>{
    axios.get('/post/data').then(response => {
      setPlaces([...response.data, ...response.data])
    })
  }, [])
  return (
    <div className='mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    {places.length > 0 && places.map(place => (
      <div>
      <div className='bg-gray-500 mb-2 rounded-2xl flex'>
      {place.photos?.[0] && (
        <img className='rounded-2xl object-cover aspect-square' src={'http://localhost:4000/upload/'+place.photos?.[0]} alt='' />
      )}
      </div>
      <h2 className='text-sm truncate'>
      {place.title}
      </h2>
      <h3 className='font-bold'>
      {place.address}
      </h3>
      <div>
      Rp{place.price} Per Malam
      </div>
      </div>
    ))}
    </div>
  )
}
