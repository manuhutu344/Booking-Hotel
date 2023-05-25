import './App.css'
import {Route, Routes} from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Layout from './Components/Layout'
import Register from './Pages/Register'
import axios from 'axios'
import { UserContextProvider } from './Components/UserContext'
import Account from './Pages/Account'
import Akomodasi from './Pages/Akomodasi'
import PlacesFormPage from './Pages/PlacesFormPage'
import PlacePage from './Pages/PlacePage'
import Bokings from './Pages/Bokings'
import Boking from './Pages/Boking'

axios.defaults.baseURL = 'http://127.0.0.1:4000'
axios.defaults.withCredentials = true

function App() {

  return (
    <UserContextProvider>
    <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/buat' element={<Register />} />
    <Route path='/akun' element={<Account />} />
    <Route path='/akun/akomodasi' element={<Akomodasi />} />
    <Route path='/akun/akomodasi/new' element={<PlacesFormPage />} />
    <Route path='/akun/akomodasi/:id' element={<PlacesFormPage />} />
    <Route path='/akomodasi/:id' element={<PlacePage />} />
    <Route path='/akun/bookings' element={<Bokings />} />
    <Route path='/akun/bookings/:id' element={<Boking />} />
    </Route>
    </Routes>
    </UserContextProvider>
  )
}

export default App
