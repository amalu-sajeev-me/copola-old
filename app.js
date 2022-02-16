import express from "express";
import { middlewares } from "./middlewares/index.js";
import { memberRouter } from "./routes/member.router.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { swaggerServe, swaggerSetup } from "./middlewares/index.js";
const app = express();

app.use("/api-docs", swaggerServe, swaggerSetup);
app.use(middlewares);
app.use("/member", memberRouter);

app.use(errorHandler);
export { app };
