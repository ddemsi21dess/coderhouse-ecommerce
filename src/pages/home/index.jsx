import React from 'react';
import { ItemListContainer } from '../../components';

export const Home = ({onHandleAddCartProduct}) => {
  return (
    <ItemListContainer  onHandleAddCartProduct = {onHandleAddCartProduct}/>
  )
}

export default Home;