import React from 'react'
import { useParams } from 'react-router-dom';
import { ItemListContainer } from '../../components';

export const Category = () => {

  const { id } = useParams();
  console.log("Category id",id);
  return (
    <ItemListContainer id = {id} />
  )
}

export default Category;
