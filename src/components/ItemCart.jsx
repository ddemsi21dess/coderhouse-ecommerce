import React, { useContext, useState }  from 'react'
import { CartContext } from '../context/CartContext'

export const ItemCart = ({ product }) => {
  
  const { removeItem } = useContext(CartContext);

  const [removingItem, setRemovingItem] = useState(false);
  
  const removeCurrentItem = () => {
    setRemovingItem(true);
    removeItem(product)
  };

  return (
    <>
      {
       product ?     
       <tbody>
        <tr>
          <td>
            <span>{` ${product.name}` }</span>     
          </td>
          <td>
            {`${product.price}`}
          </td>
          <td> 
            <span>{product.orderStock }</span>
          </td>
          <td>
            <button className='remove-product' onClick={removeCurrentItem } disabled={removingItem}>Eliminar</button>
          </td>
          <td>
            <span>{ `$ ${ product.price * product.orderStock }` }</span>
          </td>
          
        </tr>      
       </tbody>
     
     
     : ''
      }
    </>
  )
}
