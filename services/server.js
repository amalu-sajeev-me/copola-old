import { createServer } from "http";
import { app } from "../app.js";

const startServer = () => {
  const { PORT } = process.env;
  const successMsg = `server running on http://localhost:${PORT}`;
  const closeMsg = `server connection closed`;

  const server = createServer(app);
  return server
    .listen(PORT)
    .on("listening", print(successMsg))
    .on("error", console.log)
    .on("close", print(closeMsg));
};

export { startServer };
