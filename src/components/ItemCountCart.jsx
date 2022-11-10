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
    { counter > 0 
    
      ?        
        <tr>
          <td>
            <span>{` ${productInfo.title}` }</span>     
          </td>
          <td>
            {`${productInfo.price}`}
          </td>
          <td> 
            <input className='input-counter' type='text' value={counter} onChange={onInputChange}></input>  
          </td>
          <td>
            <button className='remove-product' onClick={onHandleChangeAmountProducts}>Eliminar</button>
          </td>
          <td>
            <span>{ `$ ${counter * productInfo.price}` }</span>
          </td>
         
        </tr>      
      
      
      : ''
    }
   
    </>
  )
}
