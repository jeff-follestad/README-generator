const { promptForInput } = require('./utils/prompts.js');
const { generateMarkdown } = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptProject = portfolioData => {
  console.log(`
=================
 Project Details
=================
`);
  return inquirer
    .prompt([
      promptForInput('title', 'What is the name of the project?'),
      promptForInput('description', 'What is the project description?'),
      promptForInput('installation', 'What are the steps required to install the project?'),
      promptForInput('usage', 'How to use the project?'),
      promptForInput('collaborators', 'Collaborators\' GitHub usernames (separated by commas):'),
      promptForInput('license', 'Copy & paste the project\'s license TOS:')
    ]);
};

// TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
}

promptProject()
  .then(projectData => {
    return generateMarkdown(projectData);
  })
  .then(markdown => {
    return writeToFile(markdown);
  })
  .catch(err => {
    console.log(err);
  });