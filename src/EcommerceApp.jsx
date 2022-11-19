import React, { useState , useEffect }  from 'react';
import { AppRouter } from './router/AppRouter';
import { CartProvider } from './context/CartProvider';

import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore"

import { Navbar } from './ui/components';

import './firebase/config';

import './styles.css';

export const EcommerceApp = () => {

  // const [item, setItem] = useState(null);
  const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const db = getFirestore();
      const getProductsCollection = collection(db,'products');
      getDocs(getProductsCollection)
        .then((snapshot)=> {    
          const items = snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}));
          setProducts(items);
        })
    }, [])
    
    console.log("products",products);

  // useEffect(() => {
  //    const db = getFirestore();
  //    const product = doc(db,'products','AzAnANffv0czD2nqeEnO');

  //    getDoc(product)
  //     .then((snapshot) => {
  //       if (snapshot.exists()){
  //         setItem({id: snapshot.id , ...snapshot.data()});
  //       }
  //     })
  // }, [])
  
  // console.log("item",item);
  
  return (   
    <>
      <CartProvider>
          <Navbar />
          <AppRouter />
      </CartProvider>
    </>    
  )
}


export default EcommerceApp;
