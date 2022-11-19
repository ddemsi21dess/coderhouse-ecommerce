
import React, { useContext }  from 'react'
import { useNavigate } from 'react-router-dom';
import { ItemCart } from '../../components/ItemCart';
import { CartContext } from '../../context/CartContext';

export const Cart = () => {

  const { products, clear,totalPrice,total } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
    {
      products.length === 0 ?   

      <div>
        <div className='cart-container'>
          <h3  className='cart-title'> No hay productos en el carrito</h3>
        </div>
          <div  className='back-to-main-container'>
            <button className='back-to-main' onClick={() => navigate(-1)}> Volver a comprar </button> 
          </div>
      </div>

        :
      <div>        
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

        <h3  className='cart-container-totals cart-title'>Resumen de la compra</h3>  
        <div className='cart-container'>   
        <table>
            <thead>
              <tr>
                <td>Cantidad de Productos</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{total}</td>
                <td>{`$ ${totalPrice}`}</td>
              </tr>
            </tbody>
          </table>
          </div>
      
      </div> 
      
   }
    </>

  )
}

export default Cart;