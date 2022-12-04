import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { LoadingCart } from '../ui/components';
import { ItemCart } from './ItemCart';

export const ItemCartContainer = () => {

    const { products , clear , totalPrice , total } = useContext(CartContext);


    const [removingItem, setRemovingItem] = useState(false);
  
    const removeAllItems = () =>{ 
      setRemovingItem(true);
      clear();
    }
  
    useEffect(() => {
      if (products.length === 0) setRemovingItem(false);
    }, [products.length])

    return (
        <>

            <div>        
                <h3  className='cart-container cart-title'> Lista de productos en el carrito</h3>      
                <div className='remove-all-products-container'>
                    <button className='remove-all-products' onClick={removeAllItems}  disabled={removingItem}> Borrar todo </button> 
                </div>  
                {
                    removingItem ? <LoadingCart/> 
                    :
                    <>
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
                                <ItemCart product = { product } key={product.productId}/>      
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
                
                    </>      
                }
            </div> 
         
        </>
    
    )
}
