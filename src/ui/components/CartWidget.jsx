import React from 'react'

export const CartWidget = ({products}) => {
  return (
    <div className='cart-widget'>
      <button className='cart-button'>
        <img src= '/cart.png' alt='carrito' className='cart-img' />  
        <div className='cart-widget-label'>{products}</div>

      </button>
    </div>
  )
}
