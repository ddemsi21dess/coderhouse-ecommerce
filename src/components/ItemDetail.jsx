import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import { ItemCount } from './ItemCount';

export const ItemDetail = ({ productId }) => {

  const { addItem , products } =  useContext(CartContext)
  
  const [product, setProduct] = useState({})
  const [showDetails, setShowDetails] = useState(true)  
  const [availableStock, setAvailableStock] = useState(1)

  const onAddProducts = (counter) =>{
    addItem(product,counter);
  }

  const getItem = async () => {
      try {
          const promises = [];
          promises.push(fetch(`https://6361a329af66cc87dc2f8a2e.mockapi.io/initial/products/products/${productId}`).then(res => res.json()));

          const result = await Promise.all(promises);

          if (result && result[0] && result[0].categoryId){ 
            if (isInCart(productId)){
              setAvailableStock(getAvailableStock(productId));
            }else{
              setAvailableStock(result[0].stock);
            }

            setProduct(result[0]); 
            setShowDetails(true);    
          } else {
            setShowDetails(false);
            setProduct({});
          }
      } catch (error) {
          console.log(error); 
          setShowDetails(false);
          setProduct({});
    } 
  }
  
  const getAvailableStock = (id) =>{
    const productInCart = products.find(item => item.id === id);
    return productInCart.stock - productInCart.quantity;
  };

  const isInCart = ( id ) => !!products.find(item => item.id === id);

  useEffect(() => { getItem() }, [productId]);

  useEffect(() => {
    const productInCart = products.find(item => item.id === productId);
    if ( !!productInCart ){
      setAvailableStock(productInCart.stock - productInCart.quantity);
    }
  }, [products])
  

  return (
    <>
    {
      showDetails ?

        <div className='item-detail'>
            <div className='item-detail-title'>
              <h3>{product.title ? product.title : ''}</h3> 
            </div>
            <div className='item-detail-price'>
              <h4>{`$  ${product.price ? product.price : ''}`}</h4>
            </div>
            <div className='item-detail-image'>
              <img src= {product.image ? product.image : ''} alt='producto' className='product-detail-image' />   
            </div>
            <div className='item-detail-description'>
                {product.description ? product.description : ''}
            </div>
            <div className='item-selectors'>             
              <ItemCount minBuyOrder={product.minBuyOrder} stockValue={availableStock} onAddProducts={onAddProducts} controlsEnabled={true}/>
            </div>
            <div className='item-available-products'>
              <h4>{`Productos disponibles: ${availableStock}`}</h4> 
            </div>
            <div>
              
            </div>
        </div>
     
      : <div>No se encontró el producto </div>
    }
    </>
  )
}


export default ItemDetail;