class APIError extends Error {
  constructor(statusCode, message, err) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    if (err) this.error = err;
  }
  static scream(statusCode, message, err = null) {
    const error = new APIError(statusCode, message, err);
    throw error;
  }
}

export { APIError };
