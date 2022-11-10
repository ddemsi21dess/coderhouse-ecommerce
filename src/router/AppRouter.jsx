import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Home, Detail, Cart, Category } from '../pages'

export const AppRouter = ({onHandleAddCartProduct,cartProductsList}) => {
  return (
    <>
       <Routes>
            <Route exact path="/"  element={<Home onHandleAddCartProduct = {onHandleAddCartProduct}/>} />            
            <Route exact path="/category/:id" element={<Category onHandleAddCartProduct = {onHandleAddCartProduct}/>} />
            <Route exact path="/item/:id" element={<Detail onHandleAddCartProduct = {onHandleAddCartProduct}/>} />
            <Route exact path="/cart" element={<Cart cartProductsList = {cartProductsList} />} />
            <Route path="*" element={<Navigate to="/" /> } />
        </Routes>
    </>
  )
}
