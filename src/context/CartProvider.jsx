import React, { useEffect , useState } from 'react'
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);

    const addItem = ( item , quantity ) =>{

      const newItem = [{...item , quantity }];

      if (isInCart(item.id)){
        const currentQuantity = products.find(product => product.id === item.id).quantity;
        setProducts( current =>
          current.map( prod =>            
            (
              prod.id === item.id
              ? { ...prod , quantity: currentQuantity + quantity }
              : prod
          ))
        )
      }else{
        setProducts( prev => [...prev, ...newItem] );
      }
    }

    const removeItem = ( itemId ) =>{
      setProducts(current => current.filter((item)=> item.id !== itemId));    
    }

    const clear = () => {
      setProducts([]);
    }

    const isInCart = ( id ) => !!products.find(item => item.id === id);

    useEffect(() => {
      let counter = 0;

      products.forEach( (item)=> {
        counter += item.quantity;
      });
      
      setTotalProducts(counter);
    }, [products])
    

    return (
      <CartContext.Provider value ={{ addItem , clear, removeItem, total: totalProducts, products }}>
          {children}
      </CartContext.Provider>
    )
  }