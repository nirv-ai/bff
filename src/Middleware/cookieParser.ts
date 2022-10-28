// TODO: set a real secret in .env
import type { Express } from "express";
import cookieParser from "cookie-parser";

// TODO: https://github.com/jshttp/cookie#options-1
const cookieParserOptions = {};

export type AddCookieParserMiddlewareType = (app: Express) => void;
export const addCookieParserMiddleware: AddCookieParserMiddlewareType = (
  app
) => {
  app.use(cookieParser(process.env.COOKIE_SECRET, cookieParserOptions));
};
