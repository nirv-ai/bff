import type { Request, Response } from "express";
import { validationResult } from "express-validator";

export const PlayerPlayRoute = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  // TODO: we are just sending back whatever we receive
  await Promise.resolve();

  const { password, ...player } = req.body as {
    password: string;
    callsign: string;
    email: string;
  };

  return res.json({ player });
};
