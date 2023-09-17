import { Request, Response } from "express";
import httpStatus from "http-status";
import { movieService } from "@/services/movie-service";

async function getMovies(req: Request, res: Response) {
  const movies = await movieService.getMovies();

  return res.status(httpStatus.OK).send(movies);
}

async function postMovie(req: Request, res: Response) {}

async function updateMovie(req: Request, res: Response) {}

async function deleteMovie(req: Request, res: Response) {}

export const moviesController = { getMovies, postMovie, updateMovie, deleteMovie };
