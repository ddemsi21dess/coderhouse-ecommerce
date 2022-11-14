import { useEffect, useState } from 'react'

export const useFetch = ( url ) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        setLoading(true);

        fetch(url)
            .then((res)=> res.json())
            .then((data)=>{
                setData(data);
                setLoading(false);
            })
    }, [url])
  

    return { data , loading };  
}
