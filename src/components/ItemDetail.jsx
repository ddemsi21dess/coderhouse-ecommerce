import React, { useEffect, useState,useContext } from 'react'

import { CategoryContext } from '../context/CategoryContext';

import { ItemCount } from './ItemCount';




export const ItemDetail = ({ productId }) => {

    const { setTotalProducts }  =  useContext(CategoryContext);

    const [product, setProduct] = useState({});
    const [showDetails, setShowDetails] = useState(false);

    const onAddProducts = (counter) =>{
      console.log(`Agregar al carrito ${counter} productos`);           
      console.log(`ProductId: ${product.id}  / Title: ${product.title} / Price: ${product.price}`);   
      setTotalProducts(previousValue => previousValue + counter); 
    }
    useEffect(() => {

      if (productId > 5 || !productId) return;
      setShowDetails(true);
      
      const getProduct = async ()=>{
        try {                      
           const data = await fetch(`https://6361a329af66cc87dc2f8a2e.mockapi.io/initial/products/products/${productId}`);   
           const dataProduct = await data.json();  
           setProduct(dataProduct);      
        } catch (error) {
          console.log(error)
        }
      };;
  
      getProduct();

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
        </div>
     
      : <div>No se encontró el producto </div>
    }
    </>
  )
}


export default ItemDetail;