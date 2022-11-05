import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Cart, ItemListContainer } from '../components'


import { Home, Detail } from '../pages'
import { Navbar } from '../ui/components/main'

export const AppRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            
            <Route exact path="/category" element={<ItemListContainer />} />
            <Route exact path="/detail/:id" element={<Detail />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" /> } />
        </Routes>   
    </>
  )
}
