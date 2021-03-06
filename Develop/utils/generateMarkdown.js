// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) { 
  return data.license;
}

function renderCreditsSection(data) {
  var creditsContent = '';
  data.collaborators.split(',').forEach((collaborator) => {
    let username = collaborator.replace(' ', '');
    creditsContent += `* [${username}](https://github.com/${username})\n`;
  });
  return creditsContent;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
   
## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${renderCreditsSection(data)}

## License

${renderLicenseSection(data)}
`;
}

module.exports = { generateMarkdown };
