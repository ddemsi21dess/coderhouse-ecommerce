
import { useContext, useEffect, useState } from 'react';

import '../../firebase/config';
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from "firebase/firestore"
import { CartContext } from '../../context/CartContext';

export const useFetchByProduct = (productId) => {

    const { products } = useContext(CartContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [availableStock, setAvailableStock] = useState(1);
    
    const isInCart = (items) => !!items.find(item => item.id === productId);  

    useEffect(() => {
      if (!productId) return;

      setItems([]);
      const db = getFirestore();
      
      if (productId){

        if (isInCart(products)){
          const productsInCart = products.find((product)=> product.id === productId );
          setAvailableStock(productsInCart.stock - productsInCart.quantity);
        }
        
        const item = doc(db,'products',productId);
        getDoc(item)
            .then((snapshot)=>{
               setItems({ id:snapshot.id, ...snapshot.data() });        
                if (!isInCart(products)) {
                  setAvailableStock(snapshot.data().stock); 
                }       
               setIsLoading(false);
            })
      }

    }, [productId])


    
    return { items, isLoading, availableStock }

}
