import React from 'react'
import { useState } from 'react'

export const ItemCount = ({

  onAddProducts 
  ,minBuyOrder = 1 
  ,stockValue = undefined
}) => {

  const [counter, setCounter] = useState(minBuyOrder);

  const onSubtract = () =>{

    if (counter > minBuyOrder)
        setCounter(previousCounter => previousCounter - 1);
  }
  
  const onAdd = ()=>{

    if (!stockValue || stockValue < 1)
        return;

    if (stockValue && counter < stockValue)
        setCounter(previousCounter => previousCounter + 1);
    
  }

  // const onChangeProducts = (e) => {     
  //   const re = /^[0-9\b]+$/;
  //   if (e.target.value === '' || re.test(e.target.value) ) {      
  //     if (e.target.value <= stockValue)
  //       setCounter(e.target.value);
  //   }
  // }
  const onInputChange = () =>{

  };
  const onAddProductsCart = () =>{
    if (counter > stockValue) return;
    onAddProducts(counter);
    setCounter(1);
  }
  
  return (
    <>
    <div className='item-count-container'>
        <button className= 'counter-button subtract-button' onClick={onSubtract}>-</button>
        <input  className='input-counter' type='text' value={counter} onChange={onInputChange}></input>
        <button className='counter-button add-button'  onClick={onAdd}>+</button>
    </div>
    <div className='item-count-container'>
      <button className= {counter <= stockValue ? 'add-product' : 'add-product-disabled'} onClick={onAddProductsCart}>Agregar al Carrito</button>  
    </div>
   
    </>
  )
}
