import express, { type Express, type Request, type Response } from "express";

import { PlayersRouter, PathsRouter } from "./Routers";
import { addMiddleware } from "./Middleware";

const app: Express = express();

addMiddleware(app);

// all router routes should throw and req.log({err, errMsg?})
// ^ this will attach the error to the logs
// ^ if no errMsg, the default err.message will be used
app.use("/v1/players", PlayersRouter);
app.use("/v1/paths", PathsRouter);

export const Server = () => {
  const port = process.env.APP_PORT!;

  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  app.listen(port, () => {
    console.info(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
};
