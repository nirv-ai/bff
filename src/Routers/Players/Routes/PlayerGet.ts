import type { Request, Response } from "express";
import { validationResult } from "express-validator";

import { nirvDbCore, createPgQuery } from "../../../Data";
import type { PlayerDataType } from "../../../Types";

export const PlayerGetRoute = async (req: Request, res: Response) => {
  console.info("\n\n wtf req.params", req.params);
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
    const { callsign } = req.params as Pick<PlayerDataType, "callsign">;

    const getPlayerQuery = createPgQuery({
      text: `select * from nirvai.players where callsign = $1`,
      values: [callsign],
    });

    // TODO: only get a single matching player
    const foundPlayer: PlayerDataType | null = await nirvDbCore.oneOrNone(
      getPlayerQuery
    );

    if (!foundPlayer) throw new Error("not found");

    const { password, ...player } = foundPlayer;

    return res.json({ player });
  } catch (err) {
    req.log.error({ err });

    return res.status(404).json({});
  }
};
