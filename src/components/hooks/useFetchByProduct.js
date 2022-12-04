
import { useEffect, useState } from 'react';

import '../../firebase/config';
import { getFirestore, doc, getDoc } from "firebase/firestore"

export const useFetchByProduct = (productId) => {

  
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const callFirebase = async() => {
    setIsLoading(true);    
    const db = getFirestore();
    const item = doc(db,'products',productId);
    await getDoc(item)
        .then((snapshot)=>{
           setItem({ id:snapshot.id, ...snapshot.data() }); 
           setIsLoading(false);
        })
  }


  useEffect(() => {
    if (productId) callFirebase();    
  }, [productId]);    


  return { item, isLoading }
}
