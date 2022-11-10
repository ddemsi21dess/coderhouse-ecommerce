import React from 'react'

export const Cart = ({cartProductsList}) => {
  console.log("cartProductsList in cart",cartProductsList);
  return (
    <>
      <h3>Lista de productos en el carrito</h3>
      <ul>
            <li>TEST</li>
            <li>TEST2</li>
        </ul>
      {/* {
        cartProductsList.length > 0 ?
        cartProductsList.map(product =>{
          <ul>
            <li>{product.title}</li>
            <li>{product.amount}</li>
          </ul>
        })
        : <div>No Products added</div>
      } */}
    </>

  )
}

export default Cart;