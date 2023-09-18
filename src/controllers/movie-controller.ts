import { Request, Response } from "express";
import httpStatus from "http-status";
import { movieService } from "@/services/movie-service";
import { Movie, CreateMovie, UpdateMovie } from "@/protocols/movie-protocol";

async function getMovies(req: Request, res: Response) {
  const movies = await movieService.getMovies();

  return res.status(httpStatus.OK).send(movies);
}

async function postMovie(req: Request, res: Response) {
  const body = req.body as CreateMovie;

  await movieService.postMovie(body);

  res.sendStatus(httpStatus.CREATED);
}

async function updateMovie(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const { status } = req.body as UpdateMovie;

  const movie = { id, status };

  await movieService.updateMovie(movie);

  return res.sendStatus(httpStatus.OK);
}

async function deleteMovie(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  const movie = { id } as UpdateMovie;

  await movieService.deleteMovie(movie);

  return res.sendStatus(httpStatus.OK);
}

export const moviesController = { getMovies, postMovie, updateMovie, deleteMovie };
