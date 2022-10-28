import type { Express } from "express";

import { addOpenApiMiddleware } from "./OpenApi";
import { addHelmetMiddleware } from "./helmet";
import { addCookieParserMiddleware } from "./cookieParser";
import { addLoggerMiddleware } from "./logger";
import { addBodyParserMiddleware } from "./bodyParser";

export const addMiddleware = (app: Express): void => {
  addLoggerMiddleware(app);
  addHelmetMiddleware(app);
  addCookieParserMiddleware(app);
  addBodyParserMiddleware(app);
  addOpenApiMiddleware(app);
};
