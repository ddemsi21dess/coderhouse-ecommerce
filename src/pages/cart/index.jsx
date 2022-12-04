
import React, { useContext }  from 'react'
import { EmptyCart, ItemCartContainer } from '../../components';
import { CartContext } from '../../context/CartContext';

export const Cart = () => {

  const { products  } = useContext(CartContext);
  
  return (
    <>
      {
        products.length === 0       
        ? <EmptyCart/>
        : <ItemCartContainer/>      
      }
    </>

  )
}

export default Cart;