const generateMarkdown = require("./utils/generateMarkdown.js")

const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
      type: "input",
      message: "What is the Title of your Project?",
      name: "title"
    },
    {
      type: "input",
      message: "What is your Email Address?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github"
    },
    {
      type: "input",
      message: "What is your description of your project?",
      name: "description"
    },
    {
      type: "input",
      message: "How do you install your application?",
      name: "installation"
    },
    {
      type: "input",
      message: "Provide instructions and examples for use.",
      name: "usage"
    },
    {
      type: "list",
      message: "What kind of License was used for your project?",
      name: "license",
      choices: ["MIT", "Apache", "EPL 2.0", "LGPL_2_1", "Artistic-2.0"]
    },
    {
      type: "editor",
      message: "Who were the contributors?",
      name: "contributors"
    },
    {
      type: "input",
      message: "Explain how different tests can be run on the application.",
      name: "tests"
    }
  ]


// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, function(err) {

    if (err) {
      return console.log(err);
    }
  
    console.log("Success!");
  
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions
      ).then(function(data) { 
        writeToFile("README.md", generateMarkdown(data));
    });
}

// function call to initialize program
init();

// MIT LICENSE: https://img.shields.io/npm/l/express

// APACHE LICENSE: https://img.shields.io/aur/license/android-studio

// EPL 2.0: https://img.shields.io/eclipse-marketplace/l/notepad4e

// lgpl_2_1: https://img.shields.io/cpan/l/Config-Augeas

// artistic-2.0: https://img.shields.io/badge/license-artistic--2.0-green