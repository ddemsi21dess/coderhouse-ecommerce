import React, { useMemo } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import { getProductsByType } from '../helpers';
import { Item } from './Item'
import { Loading } from './Loading';

export const ItemList = ({type}) => {

  const [products, setProducts] = useState(undefined);
  // const products = useMemo(()=> getProductsByType(type) ,[type]);
  


  useEffect(() => {
    // if (!type)
    //   setProducts(undefined);
    
    const getAllProducts = new Promise((resolve,reject) =>{
      setTimeout(()=>{
        resolve(
          setProducts(getProductsByType(type))
        );
      },500)
    })
  
  }, [type])


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
          : <Loading />
        }
      </div>
    </>
  )
}
