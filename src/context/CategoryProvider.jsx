import React from 'react'
import { useState } from 'react'
import { CategoryContext } from './CategoryContext'

export const CategoryProvider = ({ children }) => {

  const [categoryId, setCategoryId] = useState('100');
  const [productId, setProductId] = useState(undefined);
  const [totalProducts, setTotalProducts] = useState(0);
  

  return (
    <CategoryContext.Provider value ={{categoryId, setCategoryId, productId,setProductId,totalProducts, setTotalProducts}}>
        {children}
    </CategoryContext.Provider>
  )
}
