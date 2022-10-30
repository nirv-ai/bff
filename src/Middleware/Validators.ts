import { check, body, query, param } from "express-validator";

// @see https://github.com/validatorjs/validator.js#sanitizers
// TODO: update all of these to be super restrictive, e.g. must be between X and Y chars
// @see https://express-validator.github.io/docs/check-api.html
// body, cookie, header, param, query
// location === check: checks them all
const isText = (field: string, location = check) =>
  location(field).trim().escape().not().isEmpty();
const isEmail = (field: string, location = check) =>
  isText(field, location).isEmail().normalizeEmail();
const isUrl = (field: string, location = check) =>
  location(field).trim().isURL();

export const PlayerJoinValidator = [
  isEmail("email", body),
  isText("about", body),
  isUrl("avatar", body),
  isText("callsign", body),
  isText("first", body),
  isText("last", body),
  isText("password", body),
];

export const PlayerPlayValidator = [
  isText("callsign", body),
  isText("password", body),
];

export const PlayerGetValidator = [isText("callsign", param)];

export const PathGetValidator = [isText("name", param)];

export const PathsGetValidator = [isText("name", query)];
