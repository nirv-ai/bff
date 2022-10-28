import { body } from "express-validator";

// TODO: update all of these to be super restrictive, e.g. must be between X and Y chars
// @see https://github.com/validatorjs/validator.js#sanitizers
const isText = (field: string) => body(field).trim().escape().not().isEmpty();
const isEmail = (field: string) => isText(field).isEmail().normalizeEmail();
const isUrl = (field: string) => isText(field).isURL();

export const PlayerJoinValidator = [
  isEmail("email"),
  isText("about"),
  isUrl("avatar"),
  isText("callsign"),
  isText("first"),
  isText("last"),
  isText("password"),
];
