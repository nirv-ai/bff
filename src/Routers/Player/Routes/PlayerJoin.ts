import type { Request, Response } from "express";
import { validationResult } from "express-validator";

import { nirvDbCore, createPgQuery } from "../../../Data";
import type { PlayerDataType } from "../../../Types";

export const PlayerJoinRoute = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { callsign, email, password, avatar, first, last, about } =
    req.body as PlayerDataType;

  const createPlayerQuery = createPgQuery({
    text: `
      insert into nirvai.players (
        callsign, email, password, avatar, first, last, about
      ) values (
        $1, $2, nirvai.crypt($3, nirvai.gen_salt('bf')), $4, $5, $6, $7
      )
      returning *
    `,
    values: [callsign, email, password, avatar, first, last, about],
  });

  try {
    const newPlayer: PlayerDataType | null = await nirvDbCore.one(
      createPlayerQuery
    );

    if (!newPlayer) return res.status(400).json({});

    const { password: ignorePassword, ...player } = newPlayer;

    return res.json({ player });
  } catch (err) {
    req.log.error({ msg: "TODO: got unknown error", err });

    return res.status(404).json({});
  }
};
