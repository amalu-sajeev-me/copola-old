import { DocsAPIMethod, DocsAPIParam } from "../../utils/SwaggerDoc.js";

const createAccount = new DocsAPIMethod("new member", "signup");
const createAccountParam = new DocsAPIParam("body", "signup", true);
createAccountParam.addSchema = ["schema title", "schema description"];
createAccountParam.schema.prop = ["firstName", "string", "Jane"];
createAccountParam.schema.prop = ["lastName", "string", "Doe"];
createAccountParam.schema.prop = ["email", "string", "jane-doe@gmail.com"];
createAccountParam.schema.prop = ["phone", "string", "1234567890"];
createAccountParam.schema.prop = ["username", "string", "username"];
createAccountParam.schema.prop = ["password", "string", "passmeinnow"];
createAccount.addParam = createAccountParam;

export { createAccount };
