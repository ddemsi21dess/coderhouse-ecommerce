import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Home, Detail, Cart, Category } from '../pages'

import { Navbar } from '../ui/components'

export const AppRouter = () => {
  return (
    <>
      <Navbar/>
       <Routes>
            <Route exact path="/"  element={<Home />} />            
            <Route exact path="/category/:id" element={<Category />} />
            <Route exact path="/detail/:id" element={<Detail />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" /> } />
        </Routes>   
    </>
  )
}
