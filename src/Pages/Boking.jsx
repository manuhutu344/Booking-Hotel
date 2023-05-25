import React from 'react'
import { useParams } from 'react-router-dom'

function Boking() {
    const {id} = useParams()
  return (
    <div>Boking {id}</div>
  )
}

export default Boking