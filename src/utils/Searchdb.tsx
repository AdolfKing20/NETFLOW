import { Movie } from '@/types/types';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function Searchdb(query: string): Promise<Movie[]> {
  if (!query) {
    throw new Error('Query parameter is required');
  }

  const res = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  const data = await res.json();
  return data.results;
}