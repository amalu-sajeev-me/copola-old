import { parseURL, parseJSON } from "./body-parser.js";
import { session_ } from "./express-session.js";
const middlewares = [parseURL, parseJSON, session_];

export { middlewares };
