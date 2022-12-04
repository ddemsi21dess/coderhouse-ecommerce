import React from 'react'
import { useNavigate } from 'react-router-dom';

export const EmptyCart = () => {

  const navigate = useNavigate();
  
  return (
    <div>
    <div className='cart-container'>
      <h3  className='cart-title'> No hay productos en el carrito</h3>
    </div>
      <div  className='back-to-main-container'>
        <button className='back-to-main' onClick={() => navigate(-1)}> Volver a comprar </button> 
      </div>
  </div>

  )
}
