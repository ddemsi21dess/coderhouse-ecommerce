import React from 'react'
import { useParams } from 'react-router-dom';
import { ItemListContainer } from '../../components';

export const Category = ({onHandleAddCartProduct, cartProductsList}) => {

  const { id } = useParams();
  return (
    <ItemListContainer categoryId = {id} onHandleAddCartProduct = {onHandleAddCartProduct} cartProductsList= {cartProductsList}/>
  )
}

export default Category;
