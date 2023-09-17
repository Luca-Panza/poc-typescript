import { db } from "@/database/database";
import { Movie, CreateMovie } from "@/protocols/movie-protocol";

async function getGames() {
  const MoviesQuery = await db.query<Movie[]>(`SELECT * FROM movies`);

  return MoviesQuery.rows;
}

export const movieRepository = { getGames };
