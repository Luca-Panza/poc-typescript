import { Router } from "express";
import { validateSchema } from "@/middlewares/validateSchema-middleware";
import { movieSchema } from "@/schemas/movie-schema";
import { moviesController } from "@/controllers/movie-controller";

const movieRouter = Router();
movieRouter.get("/movies", moviesController.getMovies);
movieRouter.post("/movies", validateSchema(movieSchema), moviesController.postMovie);
movieRouter.put("/movies/:id", validateSchema(movieSchema), moviesController.updateMovie);
movieRouter.delete("/movies/:id", moviesController.deleteMovie);

export default movieRouter;
