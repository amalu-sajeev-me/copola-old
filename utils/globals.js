import { APIError } from "./APIError.js";
import { APIResponse } from "./APIResponse.js";
const globalMethods = {
  print: (message) => () => console.log(message),
  scream: APIError.scream,
  say: APIResponse.say,
  catchAsync: (fn) => (req, res, next) => fn(req, res, next).catch(next),
  __dirname: process.cwd(),
};

Object.keys(globalMethods).forEach((fn) => {
  global[fn] = globalMethods[fn];
});
