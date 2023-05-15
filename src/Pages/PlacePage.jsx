import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function PlacePage() {
    const {id} = useParams()
    const [place, setPlace] = useState(null)
    useEffect(()=>{
        if(!id){
            return
        }
        axios.get(`/post/lihat/${id}`).then(response =>{
            setPlace(response.data)
        })
    }, [id])
    if(!place) return ''
  return (
    <div className='mt-4 bg-gray-100 -mx-8 px-8 py-8'>
    <h1 className='text-3xl'>
    {place.title}
    </h1>
    <Link className='my-2 block font-semibold underline' target='_blank' to={'https://maps.google.com/?q='+place.address}>
    {place.address}
    </Link>
    </div>
  )
}

export default PlacePage