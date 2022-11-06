import React from 'react'
import { ItemList } from './ItemList'

export const ItemListContainer = ({ categoryId }) => {
  return (
    <>
        <ItemList categoryId = { categoryId }/>        
    </>
  )
}

export default ItemListContainer