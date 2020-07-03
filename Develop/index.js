const EditorPrompt = require("inquirer/lib/prompts/editor");
const  fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require("path")
// array of questions for user

const questions = [
    {
        type: "Input",
        name: "Title",
        message: "What is the title of your project?"
    },
    { //entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
        type: "editor",
        name: "Description",
        message: "What does your app do?"
    },
    {
        name: "Table of contents",
        default: "Installation, Usage, License, Contributing, Tests, and Questions"
    },
    {
        type: "input",
        name: "Installation",
        message: "Software requirement",
        default: "Basic running PC or MAC"
    },
    {
        type: "Input",
        name: "Usage",
        message: "Give concise examples or usage cases"
    },
    {
        type: "list",
        name: "Licenses",
        message: "What are the required licenses?",
        choices: ['Mozilla Public License 2.0', 'GNU Lesser General Public License v3.0', "MIT License", "unlicensed"]

    },
    {
        type: "input",
        name: "Contributing",
        message: "List the github user ID of key contributors"
    },
    {
        type: "input",
        name: "Tests",
        message: "List the differents types of testing conducted"
    },
    {
        type: "input",
        name: "git hub user ID",
        message: "What is your github user iD?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    
    

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(response){
        console.log(response)
        writeToFile("README.md", generateMarkdown({...response}));
        
        
    });
    

}


// function call to initialize program
init();


module.exports = init;
