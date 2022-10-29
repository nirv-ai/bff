import { postgresConnector } from "./Postgres";

// @see https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object
export const NirvDbCoreConnection = {
  database: process.env.NIRVAI_DB_CORE_DB_NAME!,
  host: process.env.NIRVAI_DB_CORE_HOST!,
  max: process.env.NIRVAI_DB_CORE_MAX_CONN! as unknown as number,
  password: process.env.NIRVAI_DB_CORE_USER_PW!,
  port: process.env.NIRVAI_DB_CORE_PORT! as unknown as number,
  user: process.env.NIRVAI_DB_CORE_USER_NAME!,
  allowExitOnIdle: true,
};

export const nirvDbCore = postgresConnector(NirvDbCoreConnection);
