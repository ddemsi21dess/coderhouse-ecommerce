import React, { useContext }  from 'react';
import { CategoryContext } from './context/CategoryContext';

import {ItemListContainer , ItemDetailContainer} from './components';
import { Navbar } from './ui/components/main';

import './styles.css';
import { AppRouter } from './router/AppRouter';


export const EcommerceApp = () => {
  
 const {productId} = useContext(CategoryContext);
 
  return (   
    <>
      {/* <Navbar />  
      {
        productId 
          ? <ItemDetailContainer/> 
          : <ItemListContainer/>
      } */}

      <AppRouter />
    </>    
  )
}


export default EcommerceApp;
