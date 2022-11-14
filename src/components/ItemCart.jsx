import React from 'react'

export const ItemCart = ({ product }) => {
  return (
    <>
      {
       product ?     
       <tr>
         <td>
           <span>{` ${product.title}` }</span>     
         </td>
         <td>
           {`${product.price}`}
         </td>
         <td> 
           <span>{product.quantity ? product.quantity : 'NaN' }</span>
         </td>
         <td>
           <button className='remove-product'>Eliminar</button>
         </td>
         <td>
           <span>{ `$ ${product.price * 1}` }</span>
         </td>
        
       </tr>      
     
     
     : ''
      }
    </>
  )
}
