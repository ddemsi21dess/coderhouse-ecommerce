import React, { useState , useContext } from 'react'

import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ItemCount } from './ItemCount'

export const Item = ({ item }) => {
  
  const {id , name , price , stock , image } = item;

  const [currentStock, setCurrentStock] = useState(stock);
  const [addingItem, setAddingItem] = useState(false);
  const { addItem } =  useContext(CartContext);

  const navigate = useNavigate();

  const onHandleSeeDetails = () => navigate(`/item/${id}`);

  const onAddItem = async (counter) => {
    setAddingItem(true);
    await addItem(item,counter);
    setCurrentStock(prev => prev - counter );
    setAddingItem(false);
  }
  
  return (
    <>

        <div className='card' >
            <div className="card-content">
              <p className='card-name'>{name}</p>
              <p className='card-price'>{`$  ${price}`}</p>
            </div>
            <div className="card-image-container">
                <img className="card-image" src={image} alt={name} />
            </div>
            
            <div className="card-content">              
                <p className='card-available-products'>{`Stock Disponible: ${currentStock}`}</p>
                <div className='card-selectors'>
                  <ItemCount stockValue={currentStock} onAddProducts={ (counter) => onAddItem(counter)} disabled={addingItem}/>
                </div>
                <p className=''>  
                  <button className='details-btn' onClick={onHandleSeeDetails} disabled = {addingItem} >Ver +</button>
                </p>
                
                {
                  addingItem 
                  ?   <p className='card-adding-product'> Añadiendo al carrito... </p>  
                  : <p className='card-adding-product'></p> 
                }
               
            </div>
        </div>

    </>
  )
}
