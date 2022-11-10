import React from 'react';
import { ItemListContainer } from '../../components';

export const Home = ({onHandleAddCartProduct,cartProductsList}) => {
  return (
    <ItemListContainer  onHandleAddCartProduct = {onHandleAddCartProduct} cartProductsList={cartProductsList}/>
  )
}

export default Home;