import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [places, setPlaces] = useState([])
  useEffect(()=>{
    axios.get('/post/data').then(response => {
      setPlaces(response.data)
    })
  }, [])
  return (
    <div className='mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    {places.length > 0 && places.map(place => (
      <div>
      <div className='bg-gray-500 rounded-2xl flex'>
      {place.photos?.[0] && (
        <img className='rounded-2xl' src={'http://localhost:4000/upload/'+place.photos?.[0]} alt='' />
      )}
      </div>
      {place.title}
      </div>
    ))}
    </div>
  )
}
