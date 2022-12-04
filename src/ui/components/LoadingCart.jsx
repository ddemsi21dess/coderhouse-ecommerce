import React from 'react'
import LoadingGIF from './../resources/loading.gif';

export const LoadingCart = () => {
  return (
    <div className='loading-cart-container'>
      <img src=  {LoadingGIF} alt='cargando' className='loading-gif' />   
      <div className='loading-label'>Borrando productos del carrito ...</div>

    </div>
  )
}
