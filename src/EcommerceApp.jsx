import React, { useContext }  from 'react';
import { CategoryContext } from './context/CategoryContext';

import {ItemListContainer , ItemDetailContainer} from './components';
import { Navbar } from './ui/components';

import './styles.css';


export const EcommerceApp = () => {
  
 const {productId} = useContext(CategoryContext);
 
  return (   
    <>
      <Navbar />  
      {
        productId 
          ? <ItemDetailContainer/> 
          : <ItemListContainer/>
      }
    </>    
  )
}


export default EcommerceApp;
