import React, { useContext }  from 'react'
import { CartContext } from '../context/CartContext'

export const ItemCart = ({ product }) => {
  
  const { removeItem } = useContext(CartContext);

  return (
    <>
      {
       product ?     
       <tr>
         <td>
           <span>{` ${product.name}` }</span>     
         </td>
         <td>
           {/* {`${product.price}`} */}
         </td>
         <td> 
           {/* <span>{product.quantity ? product.quantity : 'NaN' }</span> */}
         </td>
         <td>
           {/* <button className='remove-product' onClick={() => removeItem(product.id)}>Eliminar</button> */}
         </td>
         <td>
           {/* <span>{ `$ ${ product.quantity ? product.price * product.quantity : 'NaN'}` }</span> */}
         </td>
        
       </tr>      
     
     
     : ''
      }
    </>
  )
}
