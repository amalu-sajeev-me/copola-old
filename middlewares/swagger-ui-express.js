import swaggerUI from "swagger-ui-express";
import { swaggerDocument } from "../bin/docs/index.js";
import { styles } from "../bin/docs/docs.style.js";

const options = {
  customCss: styles,
};

console.log(styles);
const swaggerServe = swaggerUI.serve;
const swaggerSetup = swaggerUI.setup(swaggerDocument, options);

export { swaggerServe, swaggerSetup };
