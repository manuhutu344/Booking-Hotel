import './App.css'
import {Route, Routes} from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Layout from './Components/Layout'
import Register from './Pages/Register'

function App() {

  return (
    <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/buat' element={<Register />} />
    </Route>
    </Routes>
  )
}

export default App
