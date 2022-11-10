import React, { useState, useEffect }  from 'react'
import { ItemCountCart } from '../../components';

export const Cart = ({cartProductsList}) => {

  const [productIdsList, setProductIdsList] = useState([]);

  const onHandleChangeAmountProducts = (product, newAmount) =>{
    console.log("modifiedProduct",product, newAmount);
  };

  useEffect(() => {
    setProductIdsList([]);
    setProductIdsList(Object.keys(cartProductsList));    
  }, [cartProductsList])
  
  return (
    <>
      <h3>Lista de productos en el carrito</h3>
      {
        productIdsList.map(index=>(
          <div>
            <ItemCountCart             
              productInfo = {cartProductsList[index][0]}
              onHandleChangeAmountProducts = {onHandleChangeAmountProducts}
              />
          </div>
        ))

      }
    </>

  )
}

export default Cart;