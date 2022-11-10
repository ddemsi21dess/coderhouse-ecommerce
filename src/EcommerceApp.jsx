import React, { useState , useEffect }  from 'react';

import { AppRouter } from './router/AppRouter';
import { Navbar } from './ui/components';
import './styles.css';


export const EcommerceApp = () => {

  
  // all products 
  const [cartProducts, setCartProducts] = useState([]);         

  // summary list grouped by type of product
  const [cartProductsList, setCartProductsList] = useState([]);
  
  const [total, setTotal] = useState(0);

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

    const keys= Object.keys(result);
    let total = 0;
    keys.forEach((key)=>{
      total += result[key][0].amount;
    });
    setTotal(total);
    
    return result;
  }

  const onRemoveProducts = (productId) =>{
      setCartProducts(current => current.filter((item)=> item.id !== productId));           
  };
 
  useEffect(() => {
      const reducedList = onHandleReduceCartProducts();
      setCartProductsList(reducedList);   

  }, [cartProducts]);

  
  return (   
    <>
      <Navbar total= {total}/>
      <AppRouter 
        onHandleAddCartProduct = {onHandleAddCartProduct} 
        cartProductsList={cartProductsList} 
        onRemoveProducts = {onRemoveProducts}
      />
    </>    
  )
}


export default EcommerceApp;
