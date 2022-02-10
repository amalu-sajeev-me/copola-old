const globalMethods = {
  print: (message) => () => console.log(message),
  catchAsync: (fn) => (req, res, next) => fn(req, res, next).catch(next),
  __dirname: process.cwd(),
};

Object.keys(globalMethods).forEach((fn) => {
  global[fn] = globalMethods[fn];
});
