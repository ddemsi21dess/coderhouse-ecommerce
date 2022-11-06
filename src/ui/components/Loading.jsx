import React from 'react'
import LoadingGIF from './../resources/loading.gif';

export const Loading = () => {
  return (
    <div>
      <img src=  {LoadingGIF} alt='cargando' className='loading-gif' />   
      <div className='loading-label'>Cargando ...</div>

    </div>
  )
}
