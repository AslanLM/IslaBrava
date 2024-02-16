import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../components/landing/Landing'

const MainRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Landing/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/cartpages' element={<CartPages/>} />
        <Route path='/produtcs' element={<AllProducts/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default MainRouter