import React, { useContext } from 'react'

import { CartContext } from '../context/CartContext';
import { Loading } from '../ui/components';
import { useFetch } from './hooks';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({ productId }) => {
  const { addItem } =  useContext(CartContext);

  const { items, isLoading, availableStock } =  useFetch(null,productId);

  const onAddProducts = (counter) => addItem(items,counter);

  const { name ,price ,image ,minBuyOrder, description  } = items

  return (
    <>
    {
      isLoading 
        ? <Loading />     
        :    
        
        <div className='card-details' >
          <div className="card-content-details">
            <p className='card-name'>{name}</p>
            <p className='card-price'>{`$  ${price}`}</p>
          </div>
          <div className="card-image-details-container">
              <img className="card-image-details" src={image} alt={name} />
          </div>
          <div className='card-description-container'>

            <p className='card-description'>{`${description}`}</p>
          </div>
          
          <div className="card-content-details">              
              <p className='card-available-products'>{`Stock Disponible: ${availableStock}`}</p>
              <div className='card-selectors'>
                <ItemCount minBuyOrder={minBuyOrder} stockValue={availableStock} onAddProducts={onAddProducts} />
              </div>
          </div>
      </div>
    }
    </>
  )
}


export default ItemDetail;