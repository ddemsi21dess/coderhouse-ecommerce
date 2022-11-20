import React from 'react'

import { useFetch } from './hooks';

import { Item } from './Item'
import { Loading } from '../ui/components';

export const ItemList = ({ categoryId }) => {
  
  const { items, isLoading } = useFetch(categoryId,null);
 
  return (
    <>     
      <div className='list-items'>
       
        {
          isLoading ? <Loading/>
          : 
          items.map(product=>(
            <Item 
                key={product.id}  
                {...product}
                product = {product}
            />
          ))
        }
      </div>
    </>
  )
}
