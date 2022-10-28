import type { Request, Response } from "express";
import { validationResult } from "express-validator";

export const PlayerGetRoute = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  // TODO: we are just sending back whatever we receive
  await Promise.resolve();

  const { ...player } = req.body as {
    callsign: string;
  };

  return res.json({ player });
};
