import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Home, Detail, Cart, Category } from '../pages'

export const AppRouter = () => {
  return (
    <>
       <Routes>
            <Route exact path="/"  element={<Home />} />            
            <Route exact path="/category/:id" element={<Category />} />
            <Route exact path="/item/:id" element={<Detail />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" /> } />
        </Routes>   
    </>
  )
}
