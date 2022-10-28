import express, { type Express, type Request, type Response } from "express";

import { PlayerRouter } from "./Routers";

const app: Express = express();

app.use("/v1/player", PlayerRouter);

const port = process.env.PORT ?? 3001;

export const Server = () => {
  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  app.listen(port, () => {
    console.info(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
};
