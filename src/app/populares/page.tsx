"use client"
import { useEffect, useState, useRef } from 'react'; 
import { Moviesdb } from "@/utils/Moviesdb";
import Link from 'next/link';

function Moviesweb() {
  const [movies, setMovies] = useState([]);
  const carouselRef = useRef(null); 

  useEffect(() => {
    async function getMovies() {
      const popularMovies = await Moviesdb();
      setMovies(popularMovies);
    }
    getMovies();
  }, []);



  return (
    <div className='px-3  w-full max-w-5xl m-auto'>
      <div className='flex justify-between items-end py-4 m-auto'>
      <h1 className='text-2xl text-slate-200 font-semibold '>Populares</h1>
      <Link href={"/"} className='text-red-600'>Volver</Link>
      </div>
      
        <div className='flex flex-wrap justify-center gap-5'>
          {movies.map(movie => (
            <ul key={movie.id} className='flex w-64'>
                <li >
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-full h-auto object-cover rounded-lg'  />
                </li>
            </ul>
          ))}
        </div> 
        
       
    </div>
  );
}

export default Moviesweb;
