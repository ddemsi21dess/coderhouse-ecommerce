
import { useEffect, useState } from 'react';

import '../../firebase/config';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

export const useFetchByCategory = (categoryId) => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [availableStock, setAvailableStock] = useState(1);    
  
    useEffect(() => {
      
      if (!categoryId) return;

      setItems([]);      
      setIsLoading(true);    
      
      const db = getFirestore();
      let q = null;
      if (categoryId !== '100') 
          q = query(collection(db,'products'), where('categoryId', '==', categoryId));
      else   
          q = collection(db,'products');

      getDocs(q)
      .then((snapshot)=> {    
        setItems(snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()})));
        setIsLoading(false);
      })

    }, [categoryId]);    

  
    return { items, isLoading, availableStock }

}
