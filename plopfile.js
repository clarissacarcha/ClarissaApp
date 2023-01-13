module.exports = function (plop) {
  // component generator
  plop.setGenerator('component', {
    description: 'Creates a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component folder name: ',
      },
      {
        type: 'input',
        name: 'folder',
        message: 'Component folder path',
        default: 'screens',
        description: 'eg. screens, screens/SampleScreen or components',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{folder}}/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/index.js.hbs',
      },
      {
        type: 'add',
        path: 'src/{{folder}}/{{pascalCase name}}/types.js',
        templateFile: 'plop-templates/types.js.hbs',
      },
      {
        type: 'add',
        path: 'src/{{folder}}/{{pascalCase name}}/Styled.js',
        templateFile: 'plop-templates/styled.js.hbs',
      },
    ],
  });
};
