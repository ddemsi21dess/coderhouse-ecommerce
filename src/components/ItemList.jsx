import React from 'react'

import { useFetch, useFetchByCategory } from './hooks';

import { Item } from './Item'
import { Loading } from '../ui/components';

export const ItemList = ({ categoryId }) => {
  const { items, isLoading } = useFetchByCategory(categoryId);
  
  return (
    <>     
      <div className='list-items'>
       
        {
          isLoading ? <Loading/>
          : 
          items.map(product=>(
            <Item 
                key={product.id}  
                item = { product }
            />
          ))
        }
      </div>
    </>
  )
}
