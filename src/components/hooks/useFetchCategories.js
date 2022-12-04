
import { useEffect, useState } from 'react';

import '../../firebase/config';
import { getFirestore, collection, getDocs } from "firebase/firestore"

export const useFetchCategories = () => {

  
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const callFirebase = async() => {
      
    setIsLoading(true);    
    
    const db = getFirestore();
    const q = collection(db,'categories');

    await getDocs(q)
    .then((snapshot)=> {    
      setCategories(snapshot.docs.map((doc)=> ({...doc.data()})));
    
      setIsLoading(false);
    });
    setIsLoading(false);  
  }

  useEffect(() => {
    callFirebase();    
  }, []);    


  return { categories, isLoading }
}
