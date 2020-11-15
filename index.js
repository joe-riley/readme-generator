const inquirer = require('inquirer');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'full_name',
    message: "Please enter your full name (for licensing purposes)",
  },
  {
    type: 'input',
    name: 'title',
    message: "Please enter your project title",
  },
  {
    type: 'input',
    name: 'name',
    message: 'Describe your project\'s purpose',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Input instalation instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Explain how one uses the application',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines',
  },
  {
    type: 'input',
    name: 'test',
    message: 'How are the unit tests run',
  },
  {
    type: 'list',
    name: 'license',
    message: "What license is the application protected by",
    choices: [
      new inquirer.Separator('=== Licenses ==='),
      {
        name: 'GNU AGPLv3',
      },
      {
        name: 'GNU GPLv3',
      },
      {
        name: 'GNU LGPLv3',
      },
      {
        name: 'Mozilla Public License 2.0',
      },
      {
        name: 'Apache License 2.0',
      },
      {
        name: 'MIT License',
      },
      {
        name: 'Boost Software License 1.0',
      },
      {
        name: 'Unlicense',
      },
    ]
  },
  {
    type: 'input',
    name: 'github_user',
    message: 'What is your github username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the contact email for the project?'
  },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
inquirer.prompt(questions).then((answers) => {
  console.log(answers);

});

// function call to initialize program
// init();
