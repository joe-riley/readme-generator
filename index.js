const fs = require('fs');
const { Separator, prompt } = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const generateLicense = require('./utils/generateLicenses');
const generateCodeOfConduct = require('./utils/generateCodeofConduct');


if (!fs.existsSync('./output')){
    fs.mkdirSync('./output');
}

const questions = [
  {
    type: 'input',
    name: 'full_name',
    message: "Please enter your full name for licensing purposes. ",
  },
  {
    type: 'input',
    name: 'title',
    message: "Please enter your project title. ",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project\'s purpose. ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Input instalation instructions. ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Explain how one uses the application. ',
  },
  {
    type: 'list',
    name: 'contributing',
    message: 'What are the contribution guidelines? ',
    choices: [
      new Separator('=== Contributer Rules ==='),
      {
        name: 'Contributor Covenant',
      },
      {
        name: 'Write your own',
      },
    ]
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How are the unit tests run? ',
  },
  {
    type: 'list',
    name: 'license',
    message: "What license is the application protected by? ",
    choices: [
      new Separator('=== Licenses ==='),
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
    message: 'What is your github username? '
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the contact email for the project? '
  },
];

prompt(questions).then((answers) => {
  generateMarkdown(answers);
  generateLicense(answers.license, answers.full_name);
  generateCodeOfConduct(answers.contributing);

});
