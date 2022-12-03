import React, { useState }  from 'react'

export const ItemCount = ({  stockValue , onAddProducts , minBuyOrder = 1, disabled }) => {

  const [counter, setCounter] = useState(minBuyOrder);

  const onSubtract = () => counter > minBuyOrder && setCounter(previousCounter => previousCounter - 1);

  const onAdd = () => (stockValue && counter < stockValue ) && setCounter(previousCounter => previousCounter + 1);
  
  const onAddProductsCart = () => counter <= stockValue && callOnAddProduct();
  

  const callOnAddProduct  = () => {
    onAddProducts(counter);
    setCounter(1); 
  }
  
  return (
    <>
    <div className='item-count-container'>
        <button className= 'counter-button subtract-button' onClick={onSubtract} disabled= {disabled}>-</button>
        <input  className='input-counter' type='text' value={counter} readOnly></input>
        <button className='counter-button add-button'  onClick={onAdd} disabled= {disabled}>+</button>
    </div>
    <div className='item-count-container'>
      <button className= {counter <= stockValue ? 'add-product' : 'add-product-disabled'} onClick={onAddProductsCart} disabled= {disabled}>Agregar al Carrito</button>  
    </div>
   
    </>
  )
}
