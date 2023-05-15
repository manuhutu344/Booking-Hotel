import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    <div className='mt-4 bg-gray-100 -mx-8 px-8 pt-4'>
    <h1 className='text-2xl'>
    {place.title}
    </h1>
    </div>
  )
}

export default PlacePage