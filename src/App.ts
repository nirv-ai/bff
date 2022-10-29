import express, { type Express, type Request, type Response } from "express";

import { PlayersRouter, PathsRouter } from "./Routers";
import { addMiddleware } from "./Middleware";

const app: Express = express();

addMiddleware(app);
app.use("/v1/players", PlayersRouter);
app.use("/v1/paths", PathsRouter);
const port = process.env.APP_PORT!;

export const Server = () => {
  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  app.listen(port, () => {
    console.info(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
};
