import { Router } from "express";
import { validateSchema } from "@/middlewares/validateSchema-middleware";
import { movieSchema, updateMovieSchema } from "@/schemas/movie-schema";
import { moviesController } from "@/controllers/movie-controller";

const movieRouter = Router();
movieRouter.get("/movie", moviesController.getMovies);
movieRouter.post("/movie", validateSchema(movieSchema), moviesController.postMovie);
movieRouter.put("/movie/:id", validateSchema(updateMovieSchema), moviesController.updateMovie);
movieRouter.delete("/movie/:id", moviesController.deleteMovie);

export default movieRouter;
