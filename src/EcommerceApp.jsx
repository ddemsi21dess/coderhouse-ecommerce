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
    const result = cartProducts.reduce((reducedItems, { id, title, price, amount }) => {
      if (!reducedItems[id]) reducedItems[id] = [];
      if (reducedItems[id].length === 0){       
        reducedItems[id].push({id,title,price, amount});
      } 
      else{
        let productsCounter = reducedItems[id][0].amount + amount;
        reducedItems[id][0].amount = productsCounter;
      }
      return reducedItems;
    }, {});

    console.log("result",result);
    return result;
  }

  useEffect(() => {
    if (cartProducts.length > 0){      
      // onHandleReduceCartProducts(cartProducts);
      let reducedList = onHandleReduceCartProducts();
      setCartProductsList(reducedList);
   
    }
  }, [cartProducts])
  
  return (   
    <>
      <Navbar/>
      <AppRouter onHandleAddCartProduct = {onHandleAddCartProduct} cartProductsList={cartProductsList}/>
    </>    
  )
}


export default EcommerceApp;
