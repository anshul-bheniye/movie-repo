import { Link } from "react-router-dom"

export const Footer = () => {
  return (
  
<footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900 dark:border-gray-600">
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
             <a href="https://www.linkedin.com/in/anshul-bheniye/" target='_blank' rel='noreferrer' className="mr-4 hover:underline md:mr-6">LinkedIn</a>
        </li>
        <li>
            <a  href="https://twitter.com/anshul_bheniye" target='_blank' rel='noreferrer' className="mr-4 hover:underline md:mr-6">Twitter</a>
        </li>
        <li>
            <a  href="https://codepen.io/anshul_bheniye" target='_blank' rel='noreferrer' className="mr-4 hover:underline md:mr-6">CodePen</a>
        </li>
        <li>
            <a  href="https://github.com/anshul-bheniye" target='_blank' rel='noreferrer' className="mr-4 hover:underline md:mr-6">GitHub</a>
        </li>
    </ul>
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" >Movies Repo</Link>. All Rights Reserved.
    </span>
</footer>

  )
}
