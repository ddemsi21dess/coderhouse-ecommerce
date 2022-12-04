import React from 'react'

import { Loading } from '../ui/components';
import { useFetchByProduct } from './hooks';
import { Item } from './Item';

export const ItemDetail = ({ productId }) => {
  const { item, isLoading } =  useFetchByProduct(productId);

  return (
    <>
    {
      isLoading 
        ? <Loading />     
        :    
        <Item item = { item } showDeatils = { true }/>
    }
    </>
  )
}


export default ItemDetail;