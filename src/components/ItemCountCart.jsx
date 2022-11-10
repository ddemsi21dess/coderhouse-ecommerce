import React , { useEffect, useState } from 'react'

export const ItemCountCart = ({ onHandleChangeAmountProducts, productInfo }) => {
  const [counter, setCounter] = useState(1);
  const [maxReached, setMaxReached] = useState(false);
  const [minReached, setMinReached] = useState(false);

  const onSubtract = () =>{
    if (minReached) return;
    if (counter > 1)
        setCounter(previousCounter => previousCounter - 1); 
  }
  
  const onAdd = ()=>{
    if (maxReached) return;
    setCounter(previousCounter => previousCounter + 1);
    
  }

  useEffect(() => {
    if (productInfo.amount > productInfo.stock) setCounter(productInfo.stock);      
    else setCounter(productInfo.amount);   
  }, [productInfo]);

  useEffect(() => {
    setMinReached(false);
    setMaxReached(false);
    if (counter === 1) setMinReached(true);
    if (counter === productInfo.stock) setMaxReached(true);
    
    onHandleChangeAmountProducts(productInfo, counter);
  }, [counter])
  

  const onInputChange = () =>{};
  
  return (
    <>
    { counter > 0 ?
        <div className='item-count-container'>
        <span>{` ${productInfo.title}   Precio Unitario: ${productInfo.price}  ` }</span>        
        <button className= { minReached ? 'waring-button-min-limit-reached' : 'counter-button subtract-button' }  onClick={onSubtract}>-</button>
        <input className='input-counter' type='text' value={counter} onChange={onInputChange}></input>
        <button className= { maxReached ? 'waring-button-max-limit-reached' : 'counter-button add-button' }  onClick={onAdd}>+</button>
        <button className='remove-product' onClick={()=> setCounter(0)}>Eliminar</button>
        <span>{`  Total: ${counter * productInfo.price}` }</span>
      </div> : ''
    }
   
    </>
  )
}
