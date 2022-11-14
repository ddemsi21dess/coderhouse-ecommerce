import React, { useContext }  from 'react'
import { ItemCart } from '../../components/ItemCart';
import { CartContext } from '../../context/CartContext';

export const Cart = () => {

  const { products } = useContext(CartContext);
 
  
  console.log("products all",products);
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