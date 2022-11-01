import React from 'react'
import { ItemCount } from './ItemCount'

export const Item = ({
  id
  ,title
  ,price
  ,stock
  ,minBuyOrder
}) => {
  
  // const productImageUrl =`/resources/${ id }.png`;
  
  const productImageUrl =`/resources/tv-1.png`;
  return (
    <>
        <div className='item-container'>
            <div className='item-title'>
              <h3>{title}</h3> 
            </div>
            <div className='item-price'>
              <h4>{price}</h4>
            </div>
            <div className='item-image'>
              <img src= {productImageUrl} alt='producto' className='product-image' />   
            </div>
            <div className='item-selectors'>             
              <ItemCount minBuyOrder={minBuyOrder} stockValue={stock}/>
            </div>
        </div>
    </>
  )
}
