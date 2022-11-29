import { getFirestore , doc , updateDoc, collection, addDoc, getDocs, deleteDoc } from 'firebase/firestore';
import React, { useEffect , useState } from 'react'
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    /*----- firebase functions -------*/
    /*----- firebase functions -------*/
    /*----- firebase functions -------*/
    /*----- firebase functions -------*/
    /*----- firebase functions -------*/
   

    const getCartProducts = async () => {
      const db = getFirestore();
      const ordersCollection = collection(db,'orders');
      let cartProducts = [];

      await getDocs(ordersCollection).then((snapshot)=> {
        cartProducts = snapshot.docs.map(doc => ({oid: doc.id,...doc.data()})); 
      });
      
      setProducts(cartProducts);
    }

    const addItem = async (item , quantity ) =>{
      const db = getFirestore();
      const ordersCollection = collection(db,'orders');
      let cartProducts = [];

      // Step 1: Get all cart products
      await getDocs(ordersCollection).then((snapshot)=> {
        cartProducts = snapshot.docs.map(doc => ({oid: doc.id, ...doc.data()})); 
      });

      // Step 2: find out if the product is already in the cart
      const cartProduct = cartProducts.filter((doc) => doc.id === item.id);
            
      // Step 3: the product is already in the cart, so, we need to update the stock
      if (cartProduct.length > 0){
        const orderDoc = doc(db,'orders',cartProduct[0].oid);
        await updateDoc(orderDoc,{stock:cartProduct[0].orderStock + quantity});
      }
      // Step 4: the product is not in the cart, so, we need to add the product with the stock = quantity
      else {  
        const orderItem = { orderStock : quantity, ...item };
        await addDoc(ordersCollection,orderItem).then(({ id })=> console.log("id added",id));
      }

      // Step 5: we need to subtract the quantity to the stock in the products collection

      const productDoc = doc(db,'products',item.id);
      await updateDoc(productDoc,{stock:item.stock - quantity});


       // Step 6: Get and set all cart products to display on the cart page
       await getDocs(ordersCollection).then((snapshot)=> {
        // cartProducts = snapshot.docs.map(doc => ({oid: doc.id, ...doc.data()})); 
        cartProducts = snapshot.docs.map(doc => ({oid: doc.id,...doc.data()})); 
      });
      setProducts(cartProducts);
    }
    const removeItem = async( item ) =>{
      
      const db = getFirestore();

      const productDoc = doc(db,'products',item.id);
      await updateDoc(productDoc,{stock:item.initialStock});

      await deleteDoc(doc(db, "orders", item.oid));
      await getCartProducts();
          
    }

  

    const clear = async () => {
      
      const db = getFirestore();
      await setProducts([]);

      // const ordersCollection = collection(db,'orders');
      // let cartProducts = [];

      // // Step 1: Get all cart products
      // await getDocs(ordersCollection).then((snapshot)=> {
      //   cartProducts = snapshot.docs.map(doc => ({oid: doc.id, ...doc.data()})); 
      // });

    }

    /*----- firebase functions -------*/
    /*----- firebase functions -------*/
    /*----- firebase functions -------*/
    /*----- firebase functions -------*/
    /*----- firebase functions -------*/
  

    
    
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