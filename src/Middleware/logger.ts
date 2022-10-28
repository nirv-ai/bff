import type { Express, Request, Response } from "express";
import createLogger, { type Options } from "pino-http";
import pino from "pino";
import { randomUUID } from "crypto";

const loggerOptions: Options = {
  logger: pino(),
  wrapSerializers: true, // else you get WAY too much stuff
  useLevel: "info",

  autoLogging: {
    ignore: (/*req*/) => false, // incase you want to SKIP logging for certain requests
  },

  // add custom props
  customProps: (/*req, res*/) => ({
    env: process.env.NODE_ENV,
  }),

  // import type { IncomingMessage, ServerResponse } from "http";
  // @ts-expect-error req & res have different types in pino
  genReqId: (req: Request, res: Response) => {
    if (req.id) return req.id;

    const xRequestId = req.get("X-Request-Id");
    if (xRequestId) return xRequestId;

    const id = randomUUID();
    const requestId = { "X-Request-Id": randomUUID() };
    res.set(requestId);

    return id;
  },

  // Define custom serializers
  serializers: {
    err: pino.stdSerializers.err,
    req: pino.stdSerializers.req,
    res: pino.stdSerializers.res,
  },
};

export type AddLoggerMiddlewareType = (app: Express) => void;
export const addLoggerMiddleware: AddLoggerMiddlewareType = (app) => {
  app.use(createLogger(loggerOptions));
};
