import React, { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import LabelKeuntungan from '../Components/LabelKeuntungan'
import axios from 'axios'

function Akomodasi() {
  const {action} = useParams()
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [addedPhotos, setAddedPhotos] = useState([])
  const [photoLink, setPhotoLink] = useState('')
  const [description, setDescription] = useState('')
  const [perks, setPerks] = useState([])
  const [extraInfo, setExtraInfo] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [maxGuests, setMaxGuests] = useState(1)
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
  async function addPhotoByLink(e){
    e.preventDefault()
    const {data:filename} = await axios.post('/post/upload-by-link', {Link:photoLink})
    setAddedPhotos(prev =>{
      return[...prev, filename]
    })
    setPhotoLink('')
  }
  return (
    <div>
    {action !== 'new' && (
      <div className= 'text-center'>
    <Link className='inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full' to={'/akun/akomodasi/new'}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
    Tambahkan Akomodasi Baru Anda
    </Link>
    </div>
    )}
    {action === 'new' && (
      <div>
      <form>
      {preInput('Judul', 'judul untuk tempat Anda. Harus pendek dan menarik seperti dalam iklan')}
      <input type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder='Masukan Judul' />
      {preInput('Alamat', 'Masukan Alamat untuk tempat Anda.')}
      <input type='text' value={address} onChange={e => setAddress(e.target.value)} placeholder='Masukan Alamat Anda' />
      {preInput('Foto','Masukan foto dengan benar')}
      <div className='flex gap-2'>
      <input type='text' value={photoLink} onChange={e => setPhotoLink(e.target.value)} placeholder={'Tambahkan menggunakan link ....jpg'} />
      <button onClick={addPhotoByLink} className='bg-gray-200 px-4 rounded-2xl'>Masukan&nbsp;Foto</button>
      </div>
      <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
      {addedPhotos.length > 0 && addedPhotos.map(Link =>(
        <div>
        {Link}
        </div>
      ))}
      <button className='flex gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-600'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
</svg>
      Upload
      </button>
      </div>
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
    )}
    </div>
  )
}

export default Akomodasi