import React from 'react'
import { ItemList } from './ItemList'

export const ItemListContainer = ({ categoryId,onHandleAddCartProduct,cartProductsList }) => {
  return (
    <>
        <ItemList categoryId = { categoryId } onHandleAddCartProduct= {onHandleAddCartProduct} cartProductsList={cartProductsList}/>        
    </>
  )
}

export default ItemListContainer