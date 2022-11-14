import React from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetailContainer } from '../../components';

export const Detail = () => {
  const { id } = useParams();

  return (
    <ItemDetailContainer productId={id} />
  )
}

export default Detail;