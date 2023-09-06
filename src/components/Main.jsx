import React, { useEffect, useState } from 'react';
import request from '../request';
import axios from 'axios';

const Main = () => {
    const[movies,setMovie] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)]
    useEffect(() => {
        // Async function to make API request
        async function fetchMovieData() {
          try {
            const response = await axios.get(request.requestNowPlaying);
            // Handle the response data
            setMovie(response.data.results);
          } catch (error) {
            console.error('Error:', error.message);
          }
        }
    
        fetchMovieData(); // Call the async function
      }, [])
      
  return (
    
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black to-30%'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='my-4'>
                        <button className='rounded border px-4 py-2 bg-white text-black border-black'>Play</button>
                        <button className='rounded border px-4 py-2 text-white ml-4'>Watch Later</button>
                    </div>
                    <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-300'>{movie?.overview}</p>           
                </div>

                
            </div>


        </div>
    
  )
}

export default Main