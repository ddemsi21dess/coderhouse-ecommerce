import { getFirestore , doc , updateDoc, collection, addDoc, getDocs } from 'firebase/firestore';
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
        cartProducts = snapshot.docs.map(doc => ({oid: doc.id, ...doc.data()})); 
      });
      setProducts(cartProducts);
    }

    const getCartProducts = async () => {
      const db = getFirestore();
      const q = collection(db,'orders');
      
      getDocs(q).then((snapshot)=> {
        console.log("esto viene", snapshot.docs.map(doc => ({oid: doc.id, ...doc.data()})) ); 
      });

      return 1;
    }

    //Cart
    
    const createOrderCollection = (item) => {
      const db = getFirestore();  
      const ordersCollection = collection(db,"orders");  
      console.log("ordersCollection",ordersCollection);   
      addDoc(ordersCollection,item).then(({ id })=> console.log("id added",id));

    };

  const updateCartProduct = (oid, orderStock) =>{
      const db = getFirestore();
      const orderDoc = doc(db,'orders',oid);
      console.log("update orderStock",orderStock);
      console.log("update oid",oid);
      updateDoc(orderDoc,{stock:orderStock});
    }


    // Remaining Products
    const subtractStock = ( item, productsAdded) =>{
      const productId = item.id;
      const currentStock = item.stock;
      const db = getFirestore();
      const productDoc = doc(db,'products',productId);
      const remainingStock = currentStock - productsAdded;
      updateDoc(productDoc,{stock:remainingStock});
  
      console.log("subtractStock: I need to call to firebase to get the new available stock");
    }

    const getCartProduct = async(item,quantity) => {

      const db = getFirestore();
      const q = collection(db,'orders');
      
      await getDocs(q)
      .then((snapshot)=> {
        let currentOrderProducts =  snapshot.docs.map(doc => ({oid: doc.id, ...doc.data()})) 

        console.log("currentOrderProducts",currentOrderProducts); 
      if (currentOrderProducts && currentOrderProducts.length > 0){
        console.log("hay al menos una orden en el carrito",currentOrderProducts);
        let productAlreadyInCart = currentOrderProducts.filter((doc) => doc.id === item.id);

        console.log("productAlreadyInCart",productAlreadyInCart);
        updateCartProduct(productAlreadyInCart[0].oid, productAlreadyInCart[0].stock + quantity )
      }else{        
        console.log("no hay ordenes en el carrito");
        createOrderCollection(item);
      }
     

        //currentCartProducts = snapshot.docs.filter((doc)=> doc.data().id !== productId);
       
      });

     
    };

    /*----- firebase functions -------*/
    /*----- firebase functions -------*/
    /*----- firebase functions -------*/
    /*----- firebase functions -------*/
    /*----- firebase functions -------*/
  

    // const addItem = ( item , quantity ) =>{
    //   //call(item , quantity );
    //   // getCartProduct(item,quantity);
    //  // subtractStock(item,quantity );  /*----- firebase functions -------*/
    //  // sendOrder(item);                /*----- firebase functions -------*/


    //   // const newItem = [{...item , quantity }];

    //   // if (isInCart(item.id)){
    //   //   const currentQuantity = products.find(product => product.id === item.id).quantity;
    //   //   setProducts( current =>
    //   //     current.map( prod =>            
    //   //       (
    //   //         prod.id === item.id
    //   //         ? { ...prod , quantity: currentQuantity + quantity }
    //   //         : prod
    //   //     ))
    //   //   )
    //   // }else{
    //   //   setProducts( prev => [...prev, ...newItem] );
    //   // }
    // }

    const removeItem = ( itemId ) =>{
      setProducts(current => current.filter((item)=> item.id !== itemId));    
    }

    const clear = () => {
      setProducts([]);
    }

    const isInCart = ( id ) => !!products.find(item => item.id === id);

    // useEffect(() => {
    //   let counter = 0;
    //   let price = 0;

    //   products.forEach( (item)=> {
    //     counter += item.quantity;
    //     price += item.quantity * item.price
    //   });
      
    //   setTotalProducts(counter);
    //   setTotalPrice(price);
    // }, [products])
    

    return (
      <CartContext.Provider value ={{ addItem , clear, removeItem, total: totalProducts, products, totalPrice }}>
          {children}
      </CartContext.Provider>
    )
  }