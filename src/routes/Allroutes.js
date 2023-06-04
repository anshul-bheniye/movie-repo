import {Routes, Route} from 'react-router-dom';
import {MovieList, MovieDetail, Search, PageNotFound} from '../pages';

export const Allroutes = () => {
  return (
    <main className='dark:bg-slate-800 min-h-screen'>
      <Routes>
          <Route path='' element={<MovieList apiPath='movie/now_playing' />}></Route>
          <Route path='movie/:id' element={<MovieDetail />}></Route>
          <Route path='popular' element={<MovieList apiPath='movie/popular' />}></Route>
          <Route path='topRated' element={<MovieList apiPath='movie/top_rated' />}></Route>
          <Route path='search' element={<Search apiPath='search/movie' />}></Route>
          <Route path='upcoming' element={<MovieList apiPath='movie/upcoming' />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </main>
  )
}