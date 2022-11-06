import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getProductsByCategoryId } from '../helpers';

import { Loading } from '../ui/components';
import { Item } from './Item'

export const ItemList = ({ categoryId }) => {
  const [products, setProducts] = useState(undefined);
  
 //ASYNC - AWAIT
  useEffect(() => {
    if (categoryId > 5) return;
    setProducts(undefined);

    const getProducts = async ()=>{
      try {      
        const data = await fetch('https://6361a329af66cc87dc2f8a2e.mockapi.io/initial/products/products');
        const dataProducts = await data.json();
        if (categoryId === '100')
          setProducts(dataProducts);
        else
          setProducts(getProductsByCategoryId(categoryId,dataProducts));

      } catch (error) {
        console.log(error)
      }
    };;

    getProducts();
  }, [categoryId]);


  return (
    <>
      <div className='list-items'>
        { products ? 
          products.map(product=>(
            <Item 
                key={product.categoryId}  
                {...product}
            />
          ))
          : <Loading/>
        }
      </div>
    </>
  )
}
