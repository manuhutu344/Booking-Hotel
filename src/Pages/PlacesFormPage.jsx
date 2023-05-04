import React, { useEffect, useState } from 'react'
import LabelKeuntungan from '../Components/LabelKeuntungan'
import PhotosUploader from '../Components/PhotosUploader'
import AccountNav from '../Components/AccountNav'
import axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'

function PlacesFormPage() {
  const {id} = useParams()
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [addedPhotos, setAddedPhotos] = useState([])
  const [description, setDescription] = useState('')
  const [perks, setPerks] = useState([])
  const [extraInfo, setExtraInfo] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [maxGuests, setMaxGuests] = useState(1)
  const [redirect, setRedirect] = useState(false)
  useEffect(()=>{
    if(!id){
      return 
    }
    axios.get('/post/lihat/'+id).then(response =>{
      const {data} = response
      setTitle(data.title)
      setAddress(data.address)
      setAddedPhotos(data.photos)
      setDescription(data.description)
      setPerks(data.perks)
      setExtraInfo(data.extraInfo)
      setCheckIn(data.checkIn)
      setCheckOut(data.checkOut)
      setMaxGuests(data.maxGuests)
    })
  },[id])
  function inputHeader(text){
    return(
      <h2 className='text-2xl mt-4'>{text}</h2>
    )
  }
  function inputDescription(text){
    return(
      <p className='text-gray-500 text-sm'>{text}</p>
    )
  }
  function preInput(header, description){
    return(
      <>
      {inputHeader(header)}
      {inputDescription(description)}
      </>
    )
  }

  async function savePlace(e){
    e.preventDefault()
    const placeDate = {
      title, address, addedPhotos, 
      description, perks, extraInfo, 
      checkIn, checkOut, maxGuests
    }
    if(id){
      await axios.put('/post/update', {
        id,...placeDate
      })
      setRedirect(true)
    }else{
    await axios.post('/post/place', placeDate)
    setRedirect(true)
  }
    }

  if (redirect){
    return <Navigate to={'/akun/akomodasi'} />
  }
  return (
    <div>
    <AccountNav />
      <form onSubmit={savePlace}>
      {preInput('Judul', 'judul untuk tempat Anda. Harus pendek dan menarik seperti dalam iklan')}
      <input type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder='Masukan Judul' />
      {preInput('Alamat', 'Masukan Alamat untuk tempat Anda.')}
      <input type='text' value={address} onChange={e => setAddress(e.target.value)} placeholder='Masukan Alamat Anda' />
      {preInput('Foto','Masukan foto dengan benar')}
      <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
      {preInput('Deskripsi','Deskripsikan tempat Anda.')}
      <textarea value={description} onChange={e => setDescription(e.target.value)} />
      {preInput('Keuntungan','Pililah semua keuntungan pada tempat anda')}
      <div className='grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
      <LabelKeuntungan selected={perks} onChange={setPerks} />
      </div>
      {preInput('Info Tambahan','Aturan dan lain sebagainya')}
      <textarea value={extraInfo} onChange={e => setExtraInfo(e.target.value)} />
      {preInput('Check in','Tambahkan Check in')}
      <div className='grid gap-2 sm:grid-cols-3'>
      <div>
      <h3 className='mt-2 -mb-1'>
      Waktu Check in
      </h3>
      <input type='text' value={checkIn} onChange={e => setCheckIn(e.target.value)} placeholder='14:00'/>
      </div>
      <div>
      <h3 className='mt-2 -mb-1'>
      Waktu Check Out
      </h3>
      <input type='text' value={checkOut} onChange={e => setCheckOut(e.target.value)} placeholder='11.00'/>
      </div>
      <div>
      <h3 className='mt-2 -mb-1'>
      Batas pengunjung
      </h3>
      <input type='number' value={maxGuests} onChange={e => setMaxGuests(e.target.value)} />
      </div>
      </div>
      <button className='primary my-4'>Simpan</button>
      </form>
      </div>
  )
}

export default PlacesFormPage