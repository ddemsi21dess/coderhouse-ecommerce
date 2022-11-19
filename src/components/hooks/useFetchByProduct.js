import { useEffect, useState } from 'react'

export const useFetchByProduct = ( url ,productId, cartProducts ) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);  
  const [availableStock, setAvailableStock] = useState(1);

  const isInCart = () => !!cartProducts.find(item => item.id === productId);

  const getAvailableStock = (id) =>{
    const productInCart = cartProducts.find(item => item.id === id);
    return productInCart.stock - productInCart.quantity;
  };

  useEffect(() => {
    
    setLoading(true);
  
  }, [url, productId])
  

  useEffect(() => {

        fetch(url)
            .then((res)=> res.json())
            .then((data)=>{
               
                if (isInCart()) setAvailableStock(getAvailableStock(productId));
                else setAvailableStock(data.stock);  
                setData(data);

                setLoading(false);
            })
    }, [url, productId, cartProducts ])
  

    return { data , loading, availableStock };  
}
