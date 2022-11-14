import React from 'react'
import { useState } from 'react'
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const addItem = ( item , quantity ) =>{

      const newItem = [{...item , quantity }];
      
      console.log("isInCart",isInCart(item.id));
      // setProducts( prev => [...prev, ...newItem] );
      if (isInCart(item.id)){
        console.log("is already in products");
        setProducts(
          products.map( prod => (
            prod.id === item.id ? { ...prod , quantity: quantity + quantity }
            : prod
          ))
        )

      }else{
        
        console.log("se agrega");
        setProducts( prev => [...prev, ...newItem] );

      }
      // setProducts( prev => [...prev, item] );



    }

    const removeItem = ( itemId ) =>{

    }

    const clear = () => {

    }

    const isInCart = ( id ) => !!products.find(item => item.id === id);
    
    // const isInCart = ( id ) => {

    //   console.log("products",products);
    //   console.log("id",id);
    //  !!products.find(item => item.id === id)
      
    //   return false;
    // };
    
  
    return (
      <CartContext.Provider value ={{ addItem , clear, removeItem, total: products.length, products }}>
          {children}
      </CartContext.Provider>
    )
  }