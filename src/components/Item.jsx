import React from 'react'
import { useContext } from 'react'
import { CategoryContext } from '../context/CategoryContext'
import { ItemCount } from './ItemCount'

export const Item = ({
  id
  ,title
  ,price
  ,stock
  ,minBuyOrder
  ,image
}) => {
  
  const {setProductId, setCategoryId} =  useContext(CategoryContext);
  
  const onAddProducts = (counter) =>{
    console.log(`Agregar al carrito ${counter} productos`);      
  }
  const onHandleSeeDetails = () =>{
    setProductId(id);
    setCategoryId(undefined);
  };
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
            <div className='item-title'>
              <button className='details-btn' onClick={onHandleSeeDetails}>Ver detalles</button>
            </div>
        </div>
    </>
  )
}
