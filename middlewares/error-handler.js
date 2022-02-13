const errorHandler = (err, req, res, next) => {
  res.json(err);
};

export { errorHandler };
