import {Routes, Route} from 'react-router-dom';
import {MovieList, MovieDetail, Search, PageNotFound} from '../pages';

export const Allroutes = () => {
  return (
    <main className='dark:bg-slate-800 min-h-screen'>
      <Routes>
          <Route path='' element={<MovieList apiPath='movie/now_playing'  title='Home'/>}></Route>
          <Route path='movie/:id' element={<MovieDetail />}></Route>
          <Route path='popular' element={<MovieList apiPath='movie/popular' title='Popular'/>}></Route>
          <Route path='topRated' element={<MovieList apiPath='movie/top_rated' title='Top Rated'/>}></Route>
          <Route path='search' element={<Search apiPath='search/movie' />}></Route>
          <Route path='upcoming' element={<MovieList apiPath='movie/upcoming' title='Upcoming'/>}></Route>
          <Route path='*' element={<PageNotFound title='404 Page Not Found' />}></Route>
      </Routes>
    </main>
  )
}