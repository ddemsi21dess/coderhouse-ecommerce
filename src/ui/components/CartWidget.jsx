import React from 'react'
import CartImage from '../resources/cart.png';

export const CartWidget = ({products}) => {
  return (
    <div className='cart-widget'>
      <button className='cart-button'>
        <img src= {CartImage} alt='carrito' className='cart-img' />  
        <div className='cart-widget-label'>{products}</div>  
      </button>
    </div>
  )
}
