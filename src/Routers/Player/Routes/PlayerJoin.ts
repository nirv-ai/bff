import type { Request, Response } from "express";

export const PlayerJoin = (req: Request, res: Response) => {
  res.send("player join");
};
