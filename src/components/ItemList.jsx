import React, { useMemo } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import { getProductsByType } from '../helpers';
import { Loading } from '../ui/components';
import { Item } from './Item'

export const ItemList = ({type}) => {
  // const products = useMemo(()=> getProductsByType(type) ,[type]);

  const [products, setProducts] = useState(undefined);
  
  // useEffect(() => {
  //   setProducts(undefined);
  //   const getAllProducts = new Promise((resolve,reject) =>{
  //     setTimeout(()=>{
  //       resolve(
  //         setProducts(getProductsByType(type))
  //       );
  //     },500)
  //   })
  
  // }, [type])


 //ASYNC - AWAIT
  useEffect(() => {
    const getProducts = async ()=>{
      try {      
        const data = await fetch('https://6361a329af66cc87dc2f8a2e.mockapi.io/initial/products/products');
        const dataProducts = await data.json();
        setProducts(dataProducts);
      } catch (error) {
        console.log(error)
      }
    };;

    getProducts();
    console.log(products);
  }, [type]);



 //https://6361a329af66cc87dc2f8a2e.mockapi.io/initial/products/products


  return (
    <>
      <div className='list-items'>
        { products ? 
          products.map(product=>(
            <Item 
                key={product.id}  
                {...product}
            />
          ))
          : <Loading/>
        }
      </div>
    </>
  )
}
