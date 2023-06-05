import { useNavigate } from 'react-router-dom';
import FourZeroFour from '../assets/pagenotfound.jpg';
import {useTitle} from '../hooks'; 

export const PageNotFound = ({title}) => {
  const navigate = useNavigate();

const handleClick = () =>{
  return navigate('/');
}

  useTitle(`${title}`)
  
  return (
    <main>
      <div className='flex flex-col text-center items-center m-auto p-2 max-w-xl'>
        <div className='my-11 text-6xl dark:text-white'>Page Not Found</div>
        
        <img src={FourZeroFour} alt="page not found movies repo" className='my-2'/>
         
        <button onClick={handleClick} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-40">Back To Home</button>
      </div>
   </main>
  )
}
