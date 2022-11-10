import React, { useEffect, useState } from 'react'

import { ItemCount } from './ItemCount';

export const ItemDetail = ({ productId,onHandleAddCartProduct }) => {


    const [product, setProduct] = useState({});
    const [showDetails, setShowDetails] = useState(true);

    const onAddProducts = (counter) =>{
      console.log(`Agregar al carrito ${counter} productos`);           
      console.log(`ProductId: ${product.id}  / Title: ${product.title} / Price: ${product.price}`);  
      const newProduct = [{...product, amount: counter}];
      onHandleAddCartProduct(newProduct);  
    }

    const getItem = async () => {
      try {
          const promises = [];
          promises.push(fetch(`https://6361a329af66cc87dc2f8a2e.mockapi.io/initial/products/products/${productId}`).then(res => res.json()));

          const result = await Promise.all(promises);

          if (result && result[0] && result[0].categoryId){  
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

  useEffect(() => { 
    getItem();

  }, [productId]);


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
              <ItemCount minBuyOrder={product.minBuyOrder} stockValue={product.stock} onAddProducts={onAddProducts}/>
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