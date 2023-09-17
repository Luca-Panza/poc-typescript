import { Router } from "express";
import movieRouter from "@/routers/movie-router";

const indexRouter = Router();

indexRouter.use(movieRouter);

export default indexRouter;
