import React from 'react';
import { AppRouter } from './router/AppRouter';
import { CartProvider } from './context/CartProvider';

import { Navbar } from './ui/components';
import './styles.css';

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
