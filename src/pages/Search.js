
import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";

export const Search = ({apiPath}) => {
const [searchParam] = useSearchParams("query");
const queryName = searchParam.get("q");
const {data: movies} =  useFetch(apiPath, queryName)

  return (
    <main>
      <section className="py-7 ml-4">
        <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No result found for '${queryName}'` : `Result for '${queryName}'` }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap">
          {movies.map((movie)=>(
            <Card key={movie.id} movie={movie}/> 
          ))}
         
        </div>
      </section>
    </main>
  )
}
