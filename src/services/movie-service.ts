import { movieRepository } from "@/repositories/movie-repository";
import { Movie } from "@/protocols/movie-protocol";
import { errors } from "@/errors/errors";

async function getMovies() {
  return await movieRepository.getGames();
}

export const movieService = { getMovies };
