import { NodePlopAPI } from "plop";

module.exports = function (plop: NodePlopAPI) {
  plop.setGenerator("controller", {
    description: "application controller",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Controller name?",
      },
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "src/controllers/{{camelCase name}}.js",
        templateFile: "templates/controller.hbs",
      },
    ],
  });
};
