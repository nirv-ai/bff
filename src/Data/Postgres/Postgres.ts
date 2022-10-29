import pgp, { type IInitOptions, type IParameterizedQuery } from "pg-promise";

// @see https://vitaly-t.github.io/pg-promise/module-pg-promise.html
export const pgpInitOptions: IInitOptions = {
  pgFormatting: false,
  pgNative: true,
};

export const postgresConnector = pgp(pgpInitOptions);
export const createPgQuery = (opts: IParameterizedQuery) =>
  new pgp.ParameterizedQuery(opts);
