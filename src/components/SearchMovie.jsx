/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from 'react';
import { Searchdb } from '@/utils/Searchdb';

export default function SearchMovie() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const movies = await Searchdb(query);
      setResults(movies);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <>

<form className='py-4 w-full' onSubmit={handleSearch}>
  <div className="relative max-w-56 ">
    <input
      type="text"
      className='w-full input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl transition-all outline-none'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Buscar"
    />
    <button type='submit' className='absolute right-3 top-2'>
      <svg
        className="size-7 right-4 top-6 text-gray-500"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </button>
  </div>
</form>



    <div className='py-4'>
      
      <div className='flex flex-wrap justify-center gap-5'>
        {results.map((movie) => (
            // @ts-ignore
            
            <ul key={movie.id} className='flex w-40 md:w-64'>
                
          <li > 
              {/* @ts-ignore */}
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-full h-auto object-cover rounded-lg'  />
              <h3 className='text-white text-center'>{movie.title}</h3>
          </li>
      </ul>
        ))}
      </div>
    </div>




    

        </>
  );
}
