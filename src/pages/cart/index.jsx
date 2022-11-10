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
    
    <h3  className='cart-container cart-title'> Lista de productos en el carrito</h3>
    <div className='cart-container'>
     
      <table>
        <thead>
          <tr>
            <td>Producto</td>
            <td>Precio unitario</td>
            
            <td>Cantidad</td>
            <td>Editar</td>
            <td>Total por producto</td>
          </tr>
        </thead>
        {
          productIdsList.map(index=>(
            <ItemCountCart             
                productInfo = {cartProductsList[index] ? cartProductsList[index][0] : {} }
                onRemoveProducts = {onRemoveProducts}
                />
          ))        
        }
      </table>
    </div>

    </>

  )
}

export default Cart;