import Joi from "joi";
import { CreateMovie, UpdateMovie } from "@/protocols/movie-protocol";

export const movieSchema = Joi.object<CreateMovie>({
  movie: Joi.string().required(),
  platform: Joi.string().required(),
});

export const updateMovieSchema = Joi.object<UpdateMovie>({
  status: Joi.boolean().required(),
});
