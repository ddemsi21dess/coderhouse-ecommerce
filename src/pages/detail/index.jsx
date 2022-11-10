import React from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetailContainer } from '../../components';

export const Detail = ({onHandleAddCartProduct}) => {
  
  const { id } = useParams();

  return (
    <ItemDetailContainer productId={id} onHandleAddCartProduct = {onHandleAddCartProduct}/>
  )
}

export default Detail;