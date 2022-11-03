import React from 'react'
import { ItemCount } from './ItemCount'

export const Item = ({
  title
  ,price
  ,stock
  ,minBuyOrder
  ,image
}) => {
  

  const onAddProducts = (counter) =>{
    console.log(`Agregar al carrito ${counter} productos`);      
  }
  
  return (
    <>
        <div className='item-container'>
            <div className='item-title'>
              <h3>{title}</h3> 
            </div>
            <div className='item-price'>              
              <h4>{`$  ${price}`}</h4>
            </div>
            <div className='item-image'>
              <img src= {image} alt='producto' className='product-image' />   
            </div>
            <div className='item-selectors'>             
              <ItemCount minBuyOrder={minBuyOrder} stockValue={stock} onAddProducts={onAddProducts}/>
            </div>
        </div>
    </>
  )
}
