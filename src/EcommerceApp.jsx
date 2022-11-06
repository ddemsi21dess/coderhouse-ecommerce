import React  from 'react';

import { AppRouter } from './router/AppRouter';

import './styles.css';
import { Navbar } from './ui/components';


export const EcommerceApp = () => {
  
  return (   
    <>
      <Navbar/>
      <AppRouter />
    </>    
  )
}


export default EcommerceApp;
