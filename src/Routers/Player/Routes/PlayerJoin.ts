import type { Request, Response } from "express";
import { validationResult } from "express-validator";

import type { PlayerDataType } from "../../../Types";

export const PlayerJoinRoute = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  // TODO: we are just sending back whatever we receive
  await Promise.resolve();

  const { password, ...player } = req.body as PlayerDataType;

  return res.json({ player });
};
