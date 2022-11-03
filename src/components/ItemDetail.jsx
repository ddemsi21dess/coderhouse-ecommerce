import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { CategoryContext } from '../context/CategoryContext';
import { ItemCount } from './ItemCount';



export const ItemDetail = () => {

    const { productId,setTotalProducts }  =  useContext(CategoryContext);

    const [product, setProduct] = useState({});

    const onAddProducts = (counter) =>{
      console.log(`Agregar al carrito ${counter} productos`);     
      setTotalProducts(previousValue => previousValue + counter); 
    }
  
    useEffect(() => {
      const getProduct = async ()=>{
        try {      
          if (productId != undefined){
            const data = await fetch(`https://6361a329af66cc87dc2f8a2e.mockapi.io/initial/products/products/${productId}`);   

           const dataProduct = await data.json();  
           setProduct(dataProduct);
          }

         
        } catch (error) {
          console.log(error)
        }
      };;
  
      getProduct();
    }, [productId]);
  

  return (
    <>
    {
      productId ?

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
        </div>
     
      : <div>No se encontró el producto </div>
    }
    </>
  )
}


export default ItemDetail;