import React, { useState , useContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ItemCount } from './ItemCount'

export const Item = ({
  id
  ,name
  ,price
  ,stock
  ,minBuyOrder
  ,image
  ,product
}) => {
  
  const { addItem , products } =  useContext(CartContext);

  const navigate = useNavigate();

  const [availableStock, setAvailableStock] = useState(stock)
  const onHandleSeeDetails = () => navigate(`/item/${id}`);

  const onAddProducts = (counter) =>{
    addItem(product , counter);
  
  }

  useEffect(() => {
    const productInCart = products.find(item => item.id === id);
    if ( !!productInCart ){

      setAvailableStock(productInCart.stock - productInCart.quantity);
    }
  }, [products])
  
  return (
    <>
        <div className='item-container'>
            <div className='item-title'>
              <h3>{name}</h3> 
            </div>
            <div className='item-price'>              
              <h4>{`$  ${price}`}</h4>
            </div>
            <div className='item-image'>
              <img src= {image} alt='producto' className='product-image' />   
            </div>
            <div className='item-selectors'>             
              <ItemCount minBuyOrder={minBuyOrder} stockValue={availableStock} onAddProducts={onAddProducts} />
            </div>
            <div className='item-available-products'>
              <h4>{`Productos disponibles: ${availableStock}`}</h4> 
            </div>
            <div className='item-title'>
              <button className='details-btn' onClick={onHandleSeeDetails}>Ver detalles</button>
            </div>
        </div>
    </>
  )
}
