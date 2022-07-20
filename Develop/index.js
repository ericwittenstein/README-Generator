// TODOx: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODOx: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please enter your GitHub Username: '
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Please enter your preferred email address: '
    },
    {
        type: 'input',
        name: 'projTitle',
        message: 'Please enter a title for your project: '
    },
    {
        type: 'input',
        name: 'projDescr',
        message: 'Please enter a short description of your project: '
    },
    {
        type: 'list',
        name: 'projLicns',
        message: 'Please select a usage license for your project: ',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'projInstall',
        message: 'Please enter a command that will be used to install the dependencies for your project (unless a custom value is necessary, it is recommended to leave the default alone and just hit enter here): ',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'projUsage',
        message: 'Please enter any information the user needs in order to use this project: '
    },
    {
        type: 'list',
        name: 'projRepoLink',
        message: 'Would you like to insert a placeholder for a GitHub repo link?',
        choices: ['YES', 'NO']
    },
    {
        type: 'list',
        name: 'projDemoImage',
        message: 'Would you like to insert a placeholder for a screenshot or other image file?',
        choices: ['YES', 'NO']
    },
    {
        type: 'input',
        name: 'projContr',
        message: 'Please enter any information the user needs in order to contribute to this porject: '
    },
];

// TODOx: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODOx: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('The README.md file has now been generated in the same directory level as the project index file. Enjoy!');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
}

// Function call to initialize app
init();