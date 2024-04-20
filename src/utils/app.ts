import express, { Application } from "express";
import routes from "../routes";

export const app: Application = express();

app.use(express.json());
app.use(routes);
