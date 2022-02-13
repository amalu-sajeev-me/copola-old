const errorHandler = (err, req, res, next) => {
  const { message = null, statusCode = 401 } = err;
  console.log(`${err}\n${message}`);
  res.status(statusCode);
  res.json(say(false, message, err));
};

export { errorHandler };
