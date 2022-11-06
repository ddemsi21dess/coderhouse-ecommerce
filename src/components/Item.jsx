import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
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
  
  const { setTotalProducts, setCategoryId } =  useContext(CategoryContext);
  
  const navigate = useNavigate();
  const onAddProducts = (counter) =>{
    console.log(`Agregar al carrito ${counter} productos`);
    console.log(`ProductId: ${id}  / Title: ${title} / Price: ${price}`);     
    setTotalProducts(previousValue => previousValue + counter); 
  }
  const onHandleSeeDetails = () =>{
    setCategoryId(undefined);
    navigate(`/item/${id}`);
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
