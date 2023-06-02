import {Routes, Route} from 'react-router-dom';
import {Home, Popular, TopRated, Upcoming} from '../pages';

export const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='popular' element={<Popular />}></Route>
        <Route path='topRated' element={<TopRated />}></Route>
        <Route path='upcoming' element={<Upcoming />}></Route>
    </Routes>
  )
}
