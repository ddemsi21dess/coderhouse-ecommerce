import React, { useState , useEffect }  from 'react';

import { AppRouter } from './router/AppRouter';
import { Navbar } from './ui/components';
import './styles.css';
import { CartProvider } from './context/CartProvider';


export const EcommerceApp = () => {
  
  return (   
    <>
      <CartProvider>
          <Navbar />
          <AppRouter />
      </CartProvider>
    </>    
  )
}


export default EcommerceApp;
