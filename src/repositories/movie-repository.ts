import { db } from "@/database/database";
import { Movie, CreateMovie, UpdateMovie } from "@/protocols/movie-protocol";

async function getGames() {
  const MoviesQuery = await db.query<Movie[]>(`SELECT * FROM movies`);

  return MoviesQuery.rows;
}

async function findMovie(movie: CreateMovie) {
  return await db.query<Movie>(`SELECT * FROM movies WHERE movie=$1 AND platform=$2`, [movie.movie, movie.platform]);
}

async function postMovie(movie: CreateMovie) {
  return await db.query<Movie>(`INSERT INTO movies (movie, platform) VALUES ($1,$2)`, [movie.movie, movie.platform]);
}

async function findMovieById(movie: UpdateMovie) {
  return await db.query<Movie>(`SELECT * FROM movies WHERE id=$1`, [movie.id]);
}

async function updateMovie(movie: UpdateMovie) {
  return await db.query<Movie>(`UPDATE movies SET status=$1 WHERE id=$2`, [movie.status, movie.id]);
}

async function deleteMovie(movie: UpdateMovie) {
  return await db.query<Movie>(`DELETE FROM movies WHERE id=$1`, [movie.id]);
}

export const movieRepository = { getGames, findMovie, postMovie, findMovieById, updateMovie, deleteMovie };
