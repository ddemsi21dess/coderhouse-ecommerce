import React, { useState } from 'react'

import { doc, getFirestore, updateDoc, addDoc, collection, writeBatch, deleteDoc } from 'firebase/firestore';

export const FirebaseTesting = () => {


    const [orderId, setOrderId] = useState(null);


    const removeCollection = () => {

        const db = getFirestore();
        const ordersCollection = collection(db,"orders").delete();
        //collection.delete();

    }
    const removeDoc = () => {
        const db = getFirestore();
        deleteDoc(doc(db, "orders", "AZqQVrKuEJdxX4WBDqFH"));
        deleteDoc(doc(db, "orders", "zRSI0hgh0Vj0nHkdDvdc"));

    };

    const batchOrder = () => {
        const db = getFirestore();
        const batch = writeBatch(db);

        const doc1 = doc(db,'orders','CPBESPnyKV7h6tMxFUfO');
        const doc2 = doc(db,'orders','KpqPKv9cEAbLCo9A3Ngd');
        batch.update(doc1,{total:150});
        batch.set(doc2, {field:'new field value'});
        batch.commit();
    };

    const updateCollection = () =>{
      const db = getFirestore();
      const orderDoc = doc(db,'orders','KpqPKv9cEAbLCo9A3Ngd');
      console.log(orderDoc);
      updateDoc(orderDoc,{total:200});
    }
  
    const sendOrder = ()=>{
      const order = {
          buyer:{
              name: 'David',
              phone: '+54 528 65755456',
              email: 'david@google.com'
          },
          items:[
              {name:'product1', price:290},
          ],
          total: 290
      }
  
      const db = getFirestore();
  
      const ordersCollection = collection(db,"orders");
  
      addDoc(ordersCollection,order).then(({ id })=> setOrderId(id));
      
    }

  return (
    <>
    
    <button className='back-to-main' onClick={()=> updateCollection()}>Update Doc</button>
    <button className='remove-all-products' onClick={()=> sendOrder()}>Add Doc</button>
    <button className='remove-all-products' onClick={()=> batchOrder()}>Batch</button>
    <button className='remove-all-products' onClick={()=> removeDoc()}>Delete Doc</button>
    <button className='remove-all-products' onClick={()=> removeCollection()}>Delete Collection</button>
    </>
  )
}
