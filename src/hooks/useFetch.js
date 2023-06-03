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









































//   const [error, setError] = useState();
// useEffect(()=>{
//     const fetchMovies = async() => {
//             try {
//                 const response = await fetch(url);
//                 if(!response.ok){
//                     throw new Error(response.statusText)
//                 }
//                 const product = await response.json();
//                 setData(product);
//             } catch (error) {
//                 console.log(error.message);
//                 setError(error.message)
//             }
// }
// fetchMovies()
// },[url])
// return {data, error}
// }