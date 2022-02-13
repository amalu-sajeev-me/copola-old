class APIResponse {
  constructor(status, message, body) {
    //   if (body && typeof body === `object`)
    //       this.name = body.constructor.name;
    this.name = `API Response`;
    this.status = status;
    this.message = message;
    if (body) this.body = body;
  }
  static say(status, message, body = null) {
    return new APIResponse(status, message, body);
  }
}

export { APIResponse };
