import pgp, { type IInitOptions } from "pg-promise";

// @see https://vitaly-t.github.io/pg-promise/module-pg-promise.html
export const pgpInitOptions: IInitOptions = {
  pgFormatting: false,
  pgNative: true,
};

export const postgresConnector = pgp(pgpInitOptions);
