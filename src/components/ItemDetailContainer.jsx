import React from 'react'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = ({ productId,onHandleAddCartProduct }) => {
 return (
      <>
        <div className='item-detail-container'>
          <ItemDetail productId={productId} onHandleAddCartProduct = {onHandleAddCartProduct}/>        
        </div>
      </>
  )
}


export default ItemDetailContainer