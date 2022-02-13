import { ExpressError } from "./ExpressError";
const globalMethods = {
  print: (message) => () => console.log(message),
  scream: ExpressError.scream,
  catchAsync: (fn) => (req, res, next) => fn(req, res, next).catch(next),
  __dirname: process.cwd(),
};

Object.keys(globalMethods).forEach((fn) => {
  global[fn] = globalMethods[fn];
});
