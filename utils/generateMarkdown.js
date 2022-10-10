//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license !== "None") {
		return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
	} else return "";
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if (license !== "None") {
		return `\n* [License](#license)\n`;
	} else return "";
}

// function to return a github repo placeholder if desired
function insertRepoLinkReminder(wantReminder) {
	if (wantReminder !== "NO") {
		return `## GitHub Repo

    **_ THIS IS A PLACEHOLDER FOR A GITHUB REPO _**`;
	} else return "";
}

// function to return a github repo link
// if none, return empty string
function renderRepoLink(wantReminder) {
	if (wantReminder !== "NO") {
		return `\n* [GitHub Repo](#github-repo)\n`;
	} else return "";
}

// function to return a screenshot/image placeholder if desired
function insertImageReminder(wantReminder) {
	if (wantReminder !== "NO") {
		return `## Project Demo

    **_ THIS IS A PLACEHOLDER FOR AN IMAGE OR SCREEN RECORDING OF THE PROJECT _**`;
	} else return "";
}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (license !== "None") {
		return `## License

This project is licensed under the ${license} license. Learn more [HERE](LICENSE)`;
	}
	return "";
}

//function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.projTitle}
${renderLicenseBadge(data.projLicns)}

## Description

${data.projDescr}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.projLicns)}
${renderRepoLink(data.projRepoLink)}
* [Contributing](#contributing)

* [Testing](#testing)

* [Questions](#questions-and-contact-info)

## Installation

To install necessary dependencies, run the following command in the console/command line:

\`\`\`
${data.projInstall}
\`\`\`

## Usage

To begin running the program, run the following command in the console/command line:

\`\`\`
${data.projUsage}
\`\`\`

${renderLicenseSection(data.projLicns)}

${insertRepoLinkReminder(data.projRepoLink)}

${insertImageReminder(data.projDemoImage)}

## Contributing

${data.projContr}

## Testing

To initiate the unit tests for this project, run the following command in the console/command line: 

\`\`\`
${data.projTest}
\`\`\`

## Questions and Contact Info

If you have any questions about the repo, please open an issue on GitHub or contact me directly at [eric.wittenstein@gmail.com](mailto:eric.wittenstein@gmail.com).

You can find more of my work at [github.com/ericwittenstein/](https://github.com/ericwittenstein/).

<!-- EHW SIGNET
---------
    |
  -----
    |
---------
 -->

### Eric Wittenstein

`;
}

module.exports = generateMarkdown;
