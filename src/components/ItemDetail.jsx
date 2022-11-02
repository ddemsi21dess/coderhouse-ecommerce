import React, { useEffect, useState } from 'react'

import { getProductById } from '../helpers';

export const ItemDetail = ({id}) => {

    const [product, setProduct] = useState(undefined);
  
    // useEffect(() => {
    //   setProduct(undefined);
    //   const getProduct = new Promise((resolve,reject) =>{
    //     setTimeout(()=>{
    //       resolve(
    //         setProduct(getProductById(id))
    //       );
    //     },500)
    //   })
    
    // }, [id])

    useEffect(() => {
      const getProduct = async ()=>{
        try {      
          const data = await fetch(`https://6361a329af66cc87dc2f8a2e.mockapi.io/initial/products/products/${id}`);
          const dataProduct = await data.json();
          setProduct(dataProduct);
        } catch (error) {
          console.log(error)
        }
      };;
  
      getProduct();
      console.log(product);
    }, [id]);
  

    const productImageUrl =`/resources/tv-1.png`;
  return (
    <>
    {
      product ?

        <div className='item-detail'>
            <div className='item-detail-title'>
              <h3>{product.title}</h3> 
            </div>
            <div className='item-detail-price'>
              <h4>{`$  ${product.price}`}</h4>
            </div>
            <div className='item-detail-image'>
              <img src= {product.image} alt='producto' className='product-detail-image' />   
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