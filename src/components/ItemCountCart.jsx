import React , { useEffect, useState } from 'react'

export const ItemCountCart = ({ productInfo,onRemoveProducts }) => {
  const [counter, setCounter] = useState(1);
  
  const onHandleChangeAmountProducts = () =>{
    onRemoveProducts(productInfo.id);
  }
  
  const onInputChange = () =>{};
    

  useEffect(() => {
    if (productInfo.amount > productInfo.stock) setCounter(productInfo.stock);      
    else setCounter(productInfo.amount);   
  }, [productInfo]);
  return (
    <>
    { counter > 0 ?
        <div className='item-count-container'>
        <span>{` ${productInfo.title}   Precio Unitario: ${productInfo.price}  ` }</span>        
        <input className='input-counter' type='text' value={counter} onChange={onInputChange}></input>  
        <button className='remove-product' onClick={onHandleChangeAmountProducts}>Eliminar</button>
        <span>{`  Total: ${counter * productInfo.price}` }</span>
      </div> : ''
    }
   
    </>
  )
}
