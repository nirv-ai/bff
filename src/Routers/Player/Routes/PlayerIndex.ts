import type { Request, Response } from "express";

export const PlayerIndex = (req: Request, res: Response) => {
  res.send("player index");
};
