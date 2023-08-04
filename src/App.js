import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Profile from './profile'
import Logout from './logout'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Login/>}></Route>
        <Route path = "/Profile" element={<Profile />}></Route>
        <Route path = "/Logout" element={<Logout/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App