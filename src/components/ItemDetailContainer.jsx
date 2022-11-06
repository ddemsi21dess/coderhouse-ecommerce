import React from 'react'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = ({ productId }) => {
 return (
      <>
        <div className='item-detail-container'>
          <ItemDetail productId={productId}/>        
        </div>
      </>
  )
}


export default ItemDetailContainer