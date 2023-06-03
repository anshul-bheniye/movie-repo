import {Routes, Route} from 'react-router-dom';
import {MovieList, MovieDetail, Search, PageNotFound} from '../pages';

export const Allroutes = () => {
  return (
    <main className='dark:bg-slate-800 min-h-screen'>
      <Routes>
          <Route path='' element={<MovieList />}></Route>
          <Route path='movie/:id' element={<MovieDetail />}></Route>
          <Route path='popular' element={<MovieList />}></Route>
          <Route path='topRated' element={<MovieList />}></Route>
          <Route path='search' element={<Search />}></Route>
          <Route path='upcoming' element={<MovieList />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </main>
  )
}
