import React, { useContext }  from 'react'
import { CartContext } from '../context/CartContext'

export const ItemCart = ({ product }) => {
  
  const { removeItem } = useContext(CartContext);

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
            <button className='remove-product' onClick={() => removeItem(product)}>Eliminar</button>
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
