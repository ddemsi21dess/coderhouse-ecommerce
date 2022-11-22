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
          <div className="card-content">
            <p className='card-name'>{name}</p>
            <p className='card-price'>{`$  ${price}`}</p>
          </div>
          <div className="card-image-container">
              <img className="card-image-details" src={image} alt={name} />
          </div>
          
          <p className='card-description'>{`${description}`}</p>
          <div className="card-content">              
              <p className='card-available-products'>{`Stock Disponible: ${availableStock}`}</p>
              <div className='card-selectors'>
                <ItemCount minBuyOrder={minBuyOrder} stockValue={availableStock} onAddProducts={onAddProducts} />
              </div>
          </div>
      </div>


        // <div className='item-detail'>
        //     <div className='item-detail-title'>
        //       <h3>{items.name ? items.name : ''}</h3> 
        //     </div>
        //     <div className='item-detail-price'>
        //       <h4>{`$  ${items.price ? items.price : ''}`}</h4>
        //     </div>
        //     <div className='item-detail-image'>
        //       <img src= {items.image ? items.image : ''} alt='producto' className='product-detail-image' />   
        //     </div>
        //     <div className='item-detail-description'>
        //         {items.description ? items.description : ''}
        //     </div>
        //     <div className='item-selectors'>             
        //       <ItemCount minBuyOrder={items.minBuyOrder} stockValue={availableStock} onAddProducts={onAddProducts} />
        //     </div>
        //     <div className='item-available-products'>
        //       <h4>{`Productos disponibles: ${availableStock}`}</h4> 
        //     </div>
        //     <div>
              
        //     </div>
        // </div>
    }
    </>
  )
}


export default ItemDetail;