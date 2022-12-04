
import { useEffect, useState } from 'react';

import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

export const useFetchByCategory = (categoryId) => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const callFirebase = async() => {      
      setIsLoading(true);    
      
      const db = getFirestore();
      const q = query(collection(db,'products'), where('categoryId', '==', categoryId));

      await getDocs(q)
      .then((snapshot)=> {    
        setItems(snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()})));
        setIsLoading(false);
      });
      setIsLoading(false);  
    }
  
    const callFirebaseAll = async() => {
      
      setIsLoading(true);    
      
      const db = getFirestore();
      const q = collection(db,'products');

      await getDocs(q)
      .then((snapshot)=> {    
        setItems(snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()})));
        setIsLoading(false);
      });
      setIsLoading(false);  
    }
    
    useEffect(() => {
      if (!categoryId) callFirebaseAll();
      if (categoryId) callFirebase();
    }, [categoryId]);    

  
    return { items, isLoading, categoryId }

}
