import type { Request, Response } from "express";

export const PlayerIndex = (req: Request, res: Response) => {
  res.json({ player: { callsign: "poop" } });
};
