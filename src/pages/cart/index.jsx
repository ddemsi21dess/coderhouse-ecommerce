import React from 'react'

export const Cart = ({cartProductsList}) => {
  console.log("cartProductsList in cart",cartProductsList);
  console.log("reducedItems[id]",cartProductsList[1]);
  return (
    <>
      <h3>Lista de productos en el carrito</h3>
      <ul>
            <li>TEST</li>
            <li>TEST2</li>
        </ul>
      {
          <ul>
          <li>
              {`${cartProductsList[1][0].title} ${cartProductsList[1][0].amount}`} 
              <button>-</button>
              <input />
              <button>+</button>
              <button>remove all</button>
           </li>
          </ul>
      }
    </>

  )
}

export default Cart;