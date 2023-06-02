 import {Link,NavLink} from 'react-router-dom';
//  import Logo from '../assets/logo.png';

export const Header = () => {
  return (
      <header>
          <nav>
            <Link to='/'>
              {/* <img src={Logo} alt="movies repo" /> */}
              <span>Movies Repo</span>
            </Link>
          </nav>

          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
            <NavLink to='/popular'>Popular</NavLink>
            </li>
            <li>
            <NavLink to='/topRated'>Top Rated</NavLink>
            </li>
            <li>
            <NavLink to='/upcoming'>Upcoming</NavLink>
            </li>
          </ul>

          <div>
            <button>Mode</button>
            <input 
              type="text" 
              name="input" 
              placeholder='search movies' 
              autoComplete='off' 
            />
          </div>
      </header>
  )
}
