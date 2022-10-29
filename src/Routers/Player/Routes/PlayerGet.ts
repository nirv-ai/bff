import type { Request, Response } from "express";
import { validationResult } from "express-validator";

import { nirvDbCore } from "../../../Data";
import type { PlayerDataType } from "../../../Types";

export const PlayerGetRoute = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { callsign } = req.body as Pick<PlayerDataType, "callsign">;

  // TODO: only get a single matching player
  const foundPlayer: PlayerDataType | null = await nirvDbCore.oneOrNone(
    `select * from nirvai.players where callsign = $1`,
    [callsign]
  );

  if (!foundPlayer) return res.status(404).json({});

  const { password, ...player } = foundPlayer;

  return res.json({ player });
};
