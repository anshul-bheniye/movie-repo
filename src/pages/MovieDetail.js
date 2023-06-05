import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { MovieDetailCard } from "../components";
import { useTitle } from "../hooks";

export const MovieDetail = () => {
  const [details, setDetails] = useState({});
  const params = useParams();

  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`

  useEffect(()=>{
    const fetchData = async() => {
      const response = await fetch(url);
      const movieDetail = await response.json();
      setDetails(movieDetail);
    }
    fetchData()
  },[url])

  useTitle(`${details.title}`);

  return (
    <main>
      <section> 
       <MovieDetailCard key={details.id} details={details} />
      </section>
    </main>
  )
}
