import './App.css'
import {Route, Routes} from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Layout from './Components/Layout'
import Register from './Pages/Register'
import axios from 'axios'
import { UserContextProvider } from './Components/UserContextProvider'

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
    </Route>
    </Routes>
    </UserContextProvider>
  )
}

export default App
