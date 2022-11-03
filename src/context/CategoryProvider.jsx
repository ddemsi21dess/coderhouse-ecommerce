import React from 'react'
import { useState } from 'react'
import { CategoryContext } from './CategoryContext'

export const CategoryProvider = ({ children }) => {

  const [categoryId, setCategoryId] = useState(undefined);
  const [productId, setProductId] = useState(undefined);

  return (
    <CategoryContext.Provider value ={{categoryId, setCategoryId, productId,setProductId}}>
        {children}
    </CategoryContext.Provider>
  )
}
