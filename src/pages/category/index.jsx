import React from 'react'
import { useParams } from 'react-router-dom';
import { ItemListContainer } from '../../components';

export const Category = () => {

  const { id } = useParams();
  return (
    <ItemListContainer id = {id} />
  )
}

export default Category;
