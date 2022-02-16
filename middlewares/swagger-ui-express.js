import swaggerUI from "swagger-ui-express";
import { swaggerDocument } from "../bin/docs/index.js";

const swaggerServe = swaggerUI.serve;
const swaggerSetup = swaggerUI.setup(swaggerDocument);

export { swaggerServe, swaggerSetup };
