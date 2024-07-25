/* eslint-disable @next/next/no-img-element */
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

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -800 : 800;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className='px-3  w-full max-w-7xl m-auto'>
      <div className='flex justify-between items-end py-4 '>
      <h1 className='text-2xl text-slate-200 font-semibold '>Populares</h1>
      <Link href={"/populares"} className='text-red-600'>Ver Todo</Link>
      </div>
      <div className='relative overflow-hidden w-full'>
        <button 
          className='absolute hidden md:block left-0 top-[50%] h-full w-9 transform -translate-y-1/2 bg-gray-800/30 text-white rounded-tl-xl rounded-bl-xl p-2  z-10'
          onClick={() => scroll('left')}
        >
          &lt;
        </button>
        <div className="md:px-9">
        <div 
          ref={carouselRef} 
          className='flex overflow-x-auto md:overflow-hidden space-x-4 snap-x  snap-mandatory '
        >
          {movies.slice(0, 20).map(movie => (
            <div key={movie.id} className='flex-none w-[35%] md:w-1/5  snap-start'>
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className='w-full h-auto object-cover cursor-pointer '
              />
            </div>
          ))}
        </div>
        
        </div>
        <button 
          className='absolute hidden md:block right-0 top-1/2 h-full w-9 transform -translate-y-1/2 bg-gray-800/20 text-white rounded-tr-xl rounded-br-xl p-2  z-10'
          onClick={() => scroll('right')}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Moviesweb;
