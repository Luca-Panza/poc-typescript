import { Request, Response } from "express";
import httpStatus from "http-status";

async function getMovies(req: Request, res: Response) {}

async function postMovie(req: Request, res: Response) {}

async function updateMovie(req: Request, res: Response) {}

async function deleteMovie(req: Request, res: Response) {}

export const moviesController = { getMovies, postMovie, updateMovie, deleteMovie };
