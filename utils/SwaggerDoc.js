class DocsAPIMethod {
  constructor(summary, description = ``) {
      
      this.summary = summary;
      this.description = description;
      this.parameters = [];
      this.responses = {
        200: { description: "APIResponse[object]" },
      };
  }
  set addParam(parameter) {
    this.parameters.push(parameter);
  }
}

class DocsAPIParam {
  constructor(where, name, required) {
    this.in = where;
    this.name = name;
    this.required = required;
  }
  set addSchema([title, description]) {
    this.schema = new DocsParamSchema(title, description);
  }
}

class DocsParamSchema {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.properties = {};
  }
  set prop([name, type, def]) {
    this.properties[name] = {};
    this.properties[name].type = type;
    this.properties[name].default = def;
  }
}

class DocsSchemaProp {
  constructor(name, type = "string", def = "") {
    this.name = name;
    this.type = type;
    this.default = def;
  }
}

export { DocsAPIMethod, DocsAPIParam, DocsParamSchema, DocsSchemaProp };
