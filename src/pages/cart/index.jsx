import React, { useState, useEffect }  from 'react'
import { ItemCountCart } from '../../components';

export const Cart = ({cartProductsList, onRemoveProducts}) => {

  const [productIdsList, setProductIdsList] = useState([]);
  
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
              productInfo = {cartProductsList[index] ? cartProductsList[index][0] : {} }
              onRemoveProducts = {onRemoveProducts}
              />
          </div>
        ))

      }
    </>

  )
}

export default Cart;