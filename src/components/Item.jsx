import React, { useState , useContext } from 'react'

import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ItemCount } from './ItemCount'

export const Item = ({ item , showDeatils = false }) => {
  
  const {id , name , price , stock , image, description } = item;

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

        <div className= {showDeatils ? 'card-details' : 'card'} >
            <div className= { showDeatils ? 'card-content-details' : 'card-content'}>
              <p className='card-name'>{name}</p>
              <p className='card-price'>{`$  ${price}`}</p>
            </div>
            <div className= { showDeatils ? 'card-image-details-container' : 'card-image-container'}>
                <img className={showDeatils ? 'card-image-details' : 'card-image'} src={image} alt={name} />
            </div>
            
            <div className="card-content">    
                {
                  showDeatils 
                  ? 
                  <>
                    <div className='card-description-container'>
                      <p className='card-description'>{`${description}`}</p>
                    </div>
                  </>
                 
                  : <></>
                }          
                <p className='card-available-products'>{`Stock Disponible: ${currentStock}`}</p>
                <div className='card-selectors'>
                  <ItemCount stockValue={currentStock} onAddProducts={ (counter) => onAddItem(counter)} disabled={addingItem}/>
                </div>

                {
                  showDeatils 
                  ? <></>
                  : <button className='details-btn' onClick={onHandleSeeDetails} disabled = {addingItem} >Ver +</button>
                }
                
                {
                  addingItem 
                  ? <p className='card-adding-product'> Añadiendo al carrito... </p>  
                  : <p className='card-adding-product'></p> 
                }            
               
            </div>
        </div>

    </>
  )
}
