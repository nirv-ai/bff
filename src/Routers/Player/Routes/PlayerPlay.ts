import type { Request, Response } from "express";
import { validationResult } from "express-validator";

import { nirvDbCore, createPgQuery } from "../../../Data";
import type { PlayerDataType } from "../../../Types";

export const PlayerPlayRoute = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { callsign, password } = req.body as PlayerDataType;

  const loginPlayerQuery = createPgQuery({
    text: `
      select * from nirvai.players where
        callsign = $1
        and password = nirvai.crypt($2, password)`,
    values: [callsign, password],
  });

  try {
    const foundPlayer: PlayerDataType | null = await nirvDbCore.oneOrNone(
      loginPlayerQuery
    );

    if (!foundPlayer) return res.status(404).json({});

    const { password: ignorePassword, ...player } = foundPlayer;

    return res.json({ player });
  } catch (err) {
    req.log.error({ msg: "TODO: unknown error", err });

    return res.status(404).json({});
  }
};
