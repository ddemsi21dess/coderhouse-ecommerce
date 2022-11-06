import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getProductsByCategoryId } from '../helpers';

import { Loading } from '../ui/components';
import { Item } from './Item'

export const ItemList = ({ categoryId }) => {
  const [products, setProducts] = useState(undefined);  
 

  const getItems = async (categoryId) => {
    try {
        const promises = [];
        promises.push(fetch('https://6361a329af66cc87dc2f8a2e.mockapi.io/initial/products/products').then(res => res.json()));

        const results = await Promise.all(promises);
        
        setProducts(getProductsByCategoryId(categoryId,results[0]));
       
    } catch (error) {
        console.log(error);
    } 
  }




  useEffect(() => {    
    setProducts(undefined);
    getItems(categoryId);
  }, [categoryId]);


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
