import type { Request, Response } from "express";

export const PlayerPlay = (req: Request, res: Response) => {
  res.send("player play");
};
