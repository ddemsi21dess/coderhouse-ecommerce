import React, { useState , useEffect }  from 'react';

import { AppRouter } from './router/AppRouter';
import { Navbar } from './ui/components';
import './styles.css';


export const EcommerceApp = () => {

  
  // all products 
  const [cartProducts, setCartProducts] = useState([]);         

  // summary list grouped by type of product
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

  const onRemoveProducts = (productId) =>{
      console.log("cartProducts",cartProducts);
      console.log("productId",productId);
      let index  = cartProducts.findIndex(item=> item.id == productId);
      const newArray = cartProducts.filter((item,i) => i != index);
      setCartProducts(newArray);            
  };
 
  useEffect(() => {
      const reducedList = onHandleReduceCartProducts();
      setCartProductsList(reducedList);   

  }, [cartProducts])
  
  return (   
    <>
      <Navbar/>
      <AppRouter 
        onHandleAddCartProduct = {onHandleAddCartProduct} 
        cartProductsList={cartProductsList} 
        onRemoveProducts = {onRemoveProducts}
      />
    </>    
  )
}


export default EcommerceApp;
