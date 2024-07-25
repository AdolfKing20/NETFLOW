const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function Moviesdb() {
  const res = await fetch(`${BASE_URL}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  const data = await res.json();
  return data.results;
}