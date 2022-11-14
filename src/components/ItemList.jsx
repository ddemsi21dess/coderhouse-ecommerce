import React from 'react'

import { useFetchByCategory } from './hooks';

import { Item } from './Item'
import { Loading } from '../ui/components';

export const ItemList = ({ categoryId }) => {
 
  const { data, loading } = useFetchByCategory('https://6361a329af66cc87dc2f8a2e.mockapi.io/initial/products/products', categoryId);

  return (
    <>
      <div className='list-items'>
        {
          loading ? <Loading/>
          : 
          data.map(product=>(
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
