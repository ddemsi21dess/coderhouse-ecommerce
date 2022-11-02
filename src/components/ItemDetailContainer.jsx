import React from 'react'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = ({id}) => {

 return (
      <>
        <div className='item-detail-container'>
          <ItemDetail id = {id}/>        
        </div>
      </>
  )
}


export default ItemDetailContainer