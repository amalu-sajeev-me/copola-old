import { parseURL, parseJSON } from "./body-parser.js";
import { session_ } from "./express-session.js";
import { passport } from "./passport.js";
import { swaggerServe, swaggerSetup } from "./swagger-ui-express.js";

const middlewares = [parseURL, parseJSON, session_, passport.initialize()];

export { middlewares, swaggerServe, swaggerSetup };
