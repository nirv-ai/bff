import type { Request, Response } from "express";
import { validationResult } from "express-validator";

import { nirvDbCore, createPgQuery } from "../../../Data";
import type { PathDataInterface } from "../../../Types";

/**
 * @param name starting record
 * @param max total records
 * @param after get next set if 1, prev set if 0
 */
export interface PathsGetParamsInterface {
  name?: string;
  max?: number;
  after?: number;
  // filter?: string; TODO
}

const createPathsQuery = ({
  name,
  after = 1,
  max = 20,
}: PathsGetParamsInterface) => {
  if (!name)
    return {
      text: `
        select * from nirvai.paths
        order by name asc
        limit $1;
      `,
      values: [max],
    };

  return {
    text: `
        select * from nirvai.paths
        where name ${after == 1 ? ">" : "<"} $1
        order by name asc
        limit $2;
      `,
    values: [name, max],
  };
};

export const PathsGetRoute = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const params = req.query as unknown as PathsGetParamsInterface;

  try {
    const query = createPathsQuery(params);

    const getPathsQuery = createPgQuery(query);

    // TODO: only get a single matching player
    const paths: PathDataInterface[] = await nirvDbCore.manyOrNone(
      getPathsQuery
    );

    if (!paths.length) return res.status(404).json([]);

    return res.json({ paths });
  } catch (err) {
    req.log.error({ unhandledError: { err, params } });

    return res.status(404).json([]);
  }
};
