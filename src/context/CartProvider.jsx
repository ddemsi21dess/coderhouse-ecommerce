import React, { useEffect , useState } from 'react'
import { getFirestore , doc , updateDoc, collection, addDoc, getDocs, deleteDoc, getDoc } from 'firebase/firestore';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

   

    const getCartProducts = async () => {
      const db = getFirestore();
      const ordersCollection = collection(db,'orders');

      await getDocs(ordersCollection).then((snapshot)=> {
        setProducts(snapshot.docs.map(doc => ({orderId: doc.id,...doc.data()}))); 
      });
    }



    const subtractItemFromProducts = async ( item , quantity ) => {
      const db = getFirestore();
      const productDoc = doc(db,'products',item.id);
      let currentStock = 0;
      await getDoc(productDoc)
          .then((snapshot)=>{
            currentStock = snapshot.data().stock - quantity
          })

      await updateDoc(productDoc,{stock:currentStock});

      
    }
    const addItemToCart = async ( item , quantity ) => {
      const db = getFirestore();
      const ordersCollection = collection(db,'orders');
      let cartProducts = [];

      await getDocs(ordersCollection).then((snapshot)=> {
        cartProducts = snapshot.docs.map(doc => ({orderId: doc.id, ...doc.data()})); 
      });
  
      const cartProduct = cartProducts.filter((doc) => doc.productId === item.id);

      if (cartProduct.length > 0) {
        const orderDoc = doc(db,'orders',cartProduct[0].orderId);
        const newStock = cartProduct[0].orderStock + quantity;
        await updateDoc(orderDoc,{orderStock:newStock});


      } else {
        const orderItem = { productId: item.id, orderStock : quantity, name:item.name, price:item.price, initialStock:item.initialStock  };
        await addDoc(ordersCollection,orderItem).then();
      } 
        

    };
    const addItem = async (item , quantity ) =>{
      await subtractItemFromProducts(item,quantity);
      await addItemToCart(item,quantity); 
      await getCartProducts();     
    }


    const removeItem = async( item ) =>{
      const db = getFirestore();
      await deleteDoc(doc(db, "orders", item.orderId));
      
      const productDoc = doc(db,'products',item.productId);
      await updateDoc(productDoc,{ stock:item.initialStock });

      await getCartProducts();
    }  
    const clear = async () => {
      products.forEach(async (item)=> await removeItem(item));
      await getCartProducts();
    } 

    
    
    useEffect(() => { getCartProducts() }, []);

    useEffect(() => {
      let counter = 0;
      let price = 0;

      products.forEach( (item)=> {
        counter += item.orderStock;
        price += item.orderStock * item.price
      });
      
      setTotalProducts(counter);
      setTotalPrice(price);
    }, [products])
    
    
    return (
      <CartContext.Provider value ={{ addItem , clear, removeItem, total: totalProducts, products, totalPrice }}>
          {children}
      </CartContext.Provider>
    )
  }