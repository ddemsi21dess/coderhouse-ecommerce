import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ItemListContainer } from '../../components';
import { CategoryContext } from '../../context/CategoryContext';

export const Category = () => {

  const { id } = useParams();
  const { setCategoryId } =  useContext(CategoryContext);

  useEffect(() => {
    setCategoryId(id);
  }, [id])
  
  return (
    <ItemListContainer categoryId = {id} />
  )
}

export default Category;
