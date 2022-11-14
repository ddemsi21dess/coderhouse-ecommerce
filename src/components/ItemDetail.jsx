import React, { useContext } from 'react'

import { CartContext } from '../context/CartContext';
import { Loading } from '../ui/components';
import { useFetchByProduct } from './hooks';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({ productId }) => {

  const { addItem , products } =  useContext(CartContext);
  const { data, loading, availableStock } = useFetchByProduct(`https://6361a329af66cc87dc2f8a2e.mockapi.io/initial/products/products/${productId}`, productId, products);

  const onAddProducts = (counter) => addItem(data,counter);

  return (
    <>
    {
      loading 
        ? <Loading />     
        :       
        <div className='item-detail'>
            <div className='item-detail-title'>
              <h3>{data.title ? data.title : ''}</h3> 
            </div>
            <div className='item-detail-price'>
              <h4>{`$  ${data.price ? data.price : ''}`}</h4>
            </div>
            <div className='item-detail-image'>
              <img src= {data.image ? data.image : ''} alt='producto' className='product-detail-image' />   
            </div>
            <div className='item-detail-description'>
                {data.description ? data.description : ''}
            </div>
            <div className='item-selectors'>             
              <ItemCount minBuyOrder={data.minBuyOrder} stockValue={availableStock} onAddProducts={onAddProducts} />
            </div>
            <div className='item-available-products'>
              <h4>{`Productos disponibles: ${availableStock}`}</h4> 
            </div>
            <div>
              
            </div>
        </div>
    }
    </>
  )
}


export default ItemDetail;