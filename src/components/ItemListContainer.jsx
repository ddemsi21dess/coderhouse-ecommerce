import React, { useState, useEffect } from 'react'

import { ItemList } from './ItemList';

import { getCategoryId } from '../helpers';

export const ItemListContainer = ({ id }) => {
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    setCategoryId(getCategoryId(id));    
  }, [id])
  
  return (
    <>
        <ItemList categoryId = {categoryId}/>        
    </>
  )
}

export default ItemListContainer