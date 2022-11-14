import { useEffect, useState } from 'react'
import { getProductsByCategoryId } from '../../helpers';

export const useFetchByCategory = ( url, categoryId ) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        setLoading(true);

        fetch(url)
            .then((res)=> res.json())
            .then((data)=>{
                setData(getProductsByCategoryId(categoryId,data));
                setLoading(false);
            })
    }, [url,categoryId])
  

    return { data , loading };  
}
