import { clear } from '@testing-library/user-event/dist/clear';
import React, { useContext }  from 'react'
import { ItemCart } from '../../components/ItemCart';
import { CartContext } from '../../context/CartContext';

export const Cart = () => {

  const { products, clear } = useContext(CartContext);
 
  return (
    <>
    
    <h3  className='cart-container cart-title'> Lista de productos en el carrito</h3>
    
    <div className='remove-all-products-container'>
      <button className='remove-all-products' onClick={() => clear()}> Borrar todo </button>    

    </div>
       
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
          products.map( product=>(
            <ItemCart product = { product }/>      
          ))
        }
      </table>
    </div>
   
    </>

  )
}

export default Cart;