import React from 'react'

import { ItemList } from './ItemList';

import { getCategoryId } from '../helpers';

export const ItemListContainer = ({ id }) => {
  
  return (
    <>
        <ItemList categoryId = { getCategoryId(id) }/>        
    </>
  )
}

export default ItemListContainer