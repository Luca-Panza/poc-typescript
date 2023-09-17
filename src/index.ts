import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import indexRouter from "@/routers/index-router";
//import { errorHandler } from "./middlewares/errorHandler-middleware";

const app = express();
app.use(json());
app.use(cors());
app.use(indexRouter);
//app.use(errorHandler);

app.listen(5000, () => console.log("server is running on port 5000"));
