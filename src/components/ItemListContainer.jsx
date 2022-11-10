import React from 'react'
import { ItemList } from './ItemList'

export const ItemListContainer = ({ categoryId,onHandleAddCartProduct }) => {
  return (
    <>
        <ItemList categoryId = { categoryId } onHandleAddCartProduct= {onHandleAddCartProduct}/>        
    </>
  )
}

export default ItemListContainer