import type { Request, Response } from "express";
import { validationResult } from "express-validator";

import { nirvDbCore, createPgQuery } from "../../../Data";
import type { PathDataInterface } from "../../../Types";

export const PathGetRoute = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { name } = req.body as Pick<PathDataInterface, "name">;

  const getPathQuery = createPgQuery({
    text: `select * from nirvai.paths where name = $1`,
    values: [name],
  });

  // TODO: only get a single matching player
  const path: PathDataInterface | null = await nirvDbCore.oneOrNone(
    getPathQuery
  );

  if (!path) return res.status(404).json({});

  return res.json({ path });
};
