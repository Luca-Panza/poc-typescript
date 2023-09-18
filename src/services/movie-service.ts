import { movieRepository } from "@/repositories/movie-repository";
import { CreateMovie, UpdateMovie } from "@/protocols/movie-protocol";
import { errors } from "@/errors/errors";

async function getMovies() {
  return await movieRepository.getGames();
}

async function postMovie(movie: CreateMovie) {
  const existMovie = await movieRepository.findMovie(movie);
  if (existMovie.rowCount > 0) throw errors.NotFoundError("Movie");

  return await movieRepository.postMovie(movie);
}

async function updateMovie(movie: UpdateMovie) {
  const existMovie = await movieRepository.findMovieById({ id: movie.id, status: undefined });
  if (existMovie.rowCount === 0) throw errors.NotFoundError("Movie");

  return await movieRepository.updateMovie(movie);
}

async function deleteMovie(movie: UpdateMovie) {
  const existMovie = await movieRepository.findMovieById({ id: movie.id, status: undefined });
  if (existMovie.rowCount === 0) throw errors.NotFoundError("Movie");

  return await movieRepository.deleteMovie(movie);
}

export const movieService = { getMovies, postMovie, updateMovie, deleteMovie };
