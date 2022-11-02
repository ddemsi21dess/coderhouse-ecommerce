import React from 'react'
import { ItemCount } from './ItemCount'

export const Item = ({
  id
  ,title
  ,price
  ,stock
  ,minBuyOrder
}) => {
  

  const productImageUrl =`/resources/tv-1.png`; // ---> change this line when I have all the images // const productImageUrl =`/resources/${ id }.png`;  

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
              <h4>{price}</h4>
            </div>
            <div className='item-image'>
              <img src= {productImageUrl} alt='producto' className='product-image' />   
            </div>
            <div className='item-selectors'>             
              <ItemCount minBuyOrder={minBuyOrder} stockValue={stock} onAddProducts={onAddProducts}/>
            </div>
        </div>
    </>
  )
}
