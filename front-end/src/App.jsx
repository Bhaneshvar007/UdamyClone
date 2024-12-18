import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import Login from './Component/Authorization/Login'
import SignUp from './Component/Authorization/SignUp'
import NavBar from './Component/Header/NavBar'
import Footer from './Component/Footer/Footer'
import ForgetPassword from './Component/Authorization/ForgetPassword'
import UdemyBusiness from './Component/Pages/UdemyBusiness'


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/api/reset-password/:token' element={<ForgetPassword />} />
        <Route path='/e-business' element={<UdemyBusiness />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
