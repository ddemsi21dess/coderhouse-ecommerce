
import { useEffect, useState } from 'react';

import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

export const useFetchByCategory = (categoryId) => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const callFirebase = async() => {      
      console.log("callFirebase with the categoryId:",categoryId);
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
      
      console.log("callFirebase All products  with the categoryId:",categoryId, " ");
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
      console.log("use effect",categoryId);
      if (!categoryId) callFirebaseAll();
      if (categoryId) callFirebase();
      // else callFirebaseAll();
    }, [categoryId]);    

  
    return { items, isLoading, categoryId }

}
