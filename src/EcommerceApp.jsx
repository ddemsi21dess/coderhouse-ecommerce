import React, { useState }  from 'react';
import { useEffect } from 'react';

import { AppRouter } from './router/AppRouter';

import './styles.css';
import { Navbar } from './ui/components';


export const EcommerceApp = () => {

  const [cartProducts, setCartProducts] = useState([]);         

  const [cartProductsList, setCartProductsList] = useState([]);
  
  const onHandleAddCartProduct  = (newProduct) => setCartProducts(current => [ ...current, ...newProduct ]);
 
  const onHandleReduceCartProducts = () =>{
    const result = cartProducts.reduce((reducedItems, { id, title, price, amount, stock }) => {
      if (!reducedItems[id]) reducedItems[id] = [];
      if (reducedItems[id].length === 0){       
        reducedItems[id].push({id,title,price, amount, stock});
      } 
      else{
        let productsCounter = reducedItems[id][0].amount + amount;
        reducedItems[id][0].amount = productsCounter;
      }
      return reducedItems;
    }, {});

    return result;
  }

  const onUpdateCartProducts = (product, newAmount) =>{

  };

  useEffect(() => {
    if (cartProducts.length > 0){      
      let reducedList = onHandleReduceCartProducts();
      setCartProductsList(reducedList);   
    }
  }, [cartProducts])
  
  return (   
    <>
      <Navbar/>
      <AppRouter 
        onHandleAddCartProduct = {onHandleAddCartProduct} 
        cartProductsList={cartProductsList} 
        onUpdateCartProducts = {onUpdateCartProducts}
      />
    </>    
  )
}


export default EcommerceApp;
