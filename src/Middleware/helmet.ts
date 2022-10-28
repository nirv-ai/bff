import helmet from "helmet";
import type { Express } from "express";

// TODO: run through all the options
const helmetOptions = {
  contentSecurityPolicy: {
    reportOnly: true,
  },
  crossOriginResourcePolicy: true,
};

export type AddHelmetMiddlewareType = (app: Express) => void;
export const addHelmetMiddleware: AddHelmetMiddlewareType = (app) => {
  app.use(helmet(helmetOptions));
};
