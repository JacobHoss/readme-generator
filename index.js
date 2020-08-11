const generateMarkdown = require("./utils/generateMarkdown.js")

const inquirer = require("inquirer");
const fs = require('fs');

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
      type: "list",
      message: "What kind of pizza?",
      name: "pizza",
      choices: ["Pineapple", "Bacon", "Mushroom"]
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

