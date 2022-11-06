import React from 'react'
import { useState } from 'react'
import { CategoryContext } from './CategoryContext'

export const CategoryProvider = ({ children }) => {

  const [categoryId, setCategoryId] = useState(undefined);
  const [totalProducts, setTotalProducts] = useState(0);

  return (
    <CategoryContext.Provider value ={{categoryId, setCategoryId, totalProducts, setTotalProducts}}>
        {children}
    </CategoryContext.Provider>
  )
}
