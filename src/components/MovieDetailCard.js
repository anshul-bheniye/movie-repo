
import Backup from '../assets/backup.jpg';

export const MovieDetailCard = ({details}) => {
        const {poster_path, original_title, imdb_id, overview, genres, status,vote_average, vote_count, release_date,runtime } = details;
        const pic = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : Backup ;
     
        return (
            <div className='flex justify-center flex-wrap py-10'>
                <div className='max-w-sm my-auto'>
                    <img className='rounded' src={pic} alt={original_title} />
                </div>
                <div className='max-w-2xl text-lg text-gray-700 dark:text-white my-auto p-10'>
                    <h2 className='text-4xl py-2 bold max-sm:text-center'>{original_title}</h2>
                    <p className='text-2xl py-2'>{overview}</p>
                    
                    {genres ? ( <p className='flex flex-wrap gap-2 my-2 '>{genres && genres.map((genre)=>(<span className='rounded p-2 border border-gray-200 dark:border-dark-600 mr-2' key={genre.id}>{genre.name}</span>))}</p>) : ""}     
                   
                    <div className="flex items-center py-1">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="ml-2 text-gray-900 dark:text-white">{vote_average}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <span className="text-gray-900 dark:text-white">{vote_count} reviews</span>
                    </div>

                    <p className='py-1'><span className='bold text-xl'>Time :</span> {runtime} minutes</p>
                    <p className='py-1'><span className='bold text-xl'>Status :</span> {status}</p>
                    <p className='py-1'><span className='bold text-xl'>Date :</span> {release_date}</p>
                    
                    {imdb_id ? (<a href={`https://www.imdb.com/title/${imdb_id}`} target='_blank' rel='noreferrer' className='py-1'><span className='bold text-xl'>IMDB code :</span> {imdb_id}</a>) : "" }
                    
                </div>

            </div>
    )
}
