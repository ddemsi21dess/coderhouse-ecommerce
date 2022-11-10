import React from 'react'
import { useParams } from 'react-router-dom';
import { ItemListContainer } from '../../components';

export const Category = ({onHandleAddCartProduct}) => {

  const { id } = useParams();
  return (
    <ItemListContainer categoryId = {id} onHandleAddCartProduct = {onHandleAddCartProduct}/>
  )
}

export default Category;
