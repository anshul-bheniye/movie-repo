import { useEffect, useState} from "react";

export const useFetch = (apiPath, queryName="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryName}`
    useEffect(()=>{
     const fetchData = async()=>{
        const response = await fetch(url);
        const product = await response.json();
        setData(product.results)
    }
     fetchData()
    },[url])
    return {data}
}