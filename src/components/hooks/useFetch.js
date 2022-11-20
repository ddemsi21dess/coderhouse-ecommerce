
import { useContext, useEffect, useState } from 'react';

import '../../firebase/config';
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from "firebase/firestore"
import { CartContext } from '../../context/CartContext';

export const useFetch = (categoryId = null, productId = null) => {

    const { products } = useContext(CartContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [availableStock, setAvailableStock] = useState(1);
    
    const isInCart = (items) => !!items.find(item => item.id === productId);
  
    useEffect(() => {
    
      setIsLoading(true);
    
    }, [categoryId, productId])
    
  

    useEffect(() => {

      const db = getFirestore();
      let q = null;
      
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
      }else{
        if (categoryId) 
            q = query(collection(db,'products'), where('categoryId', '==', categoryId));
        else   
            q = collection(db,'products');

        getDocs(q)
        .then((snapshot)=> {    
          setItems(snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()})));
          setIsLoading(false);
        })
      }

    }, [categoryId, productId, products])
    
    return { items, isLoading, availableStock }

}
