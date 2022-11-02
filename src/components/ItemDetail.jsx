import React, { useEffect, useState } from 'react'

import { getProductById } from '../helpers';

export const ItemDetail = ({id}) => {

    const [product, setProduct] = useState(undefined);
  
    useEffect(() => {
      setProduct(undefined);
      const getProduct = new Promise((resolve,reject) =>{
        setTimeout(()=>{
          resolve(
            setProduct(getProductById(id))
          );
        },500)
      })
    
    }, [id])

    const productImageUrl =`/resources/tv-1.png`;
  return (
    <>
    {
      product ?

        <div className='item-detail-container'>
            <div className='item-detail-title'>
              <h3>{product.title}</h3> 
            </div>
            <div className='item-detail-price'>
              <h4>{product.price}</h4>
            </div>
            <div className='item-detail-image'>
              <img src= {productImageUrl} alt='producto' className='product-detail-image' />   
            </div>
            <div className='item-detail-description'>
                {product.description}
            </div>
        </div>
     
      : <></>
    }
    </>
  )
}


export default ItemDetail;