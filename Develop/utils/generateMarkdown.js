// TODOx: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  else return '';
}

// TODOx: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  else return '';
}

// function to return a github repo placeholder if desired
function insertRepoLinkReminder(wantReminder) {
  if (wantReminder) {
    return `\n## GitHub Repo

    **_ THIS IS A PLACEHOLDER FOR A GITHUB REPO _**\n`;
  }
  else return '';
}

// function to return a screenshot/image placeholder if desired
function insertImageReminder(wantReminder) {
  if (wantReminder) {
    return `\n## Project Demo

    **_ THIS IS A PLACEHOLDER FOR AN IMAGE OR SCREEN RECORDING OF THE PROJECT _**\n`;
  }
  else return '';
}

// TODOx: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

- This project is licensed under the ${license} license. -`;
  }
  return '';
}

// TODOx: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projTitle}
${renderLicenseBadge(data.projLicns)}

## Description

${data.projDescr}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.projLicns)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command in the console/command line:

\`\`\`
${data.projInstall}
\`\`\`

## Usage

${data.projUsage}

${renderLicenseSection(data.projLicns)}

${insertRepoLinkReminder(data.projRepoLink)}

${insertImageReminder(data.projDemoImage)}

## Contributing

${data.projContr}

## Questions and Contact Info

If you have any questions about the repo, please open an issue on GitHub or contact me directly at ${data.emailAddress}.

You can find more of my work at [github.com/${data.githubUsername}/](https://github.com/${data.githubUsername}/).
`;
}

module.exports = generateMarkdown;