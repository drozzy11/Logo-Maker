
// Inquirer import
const inquirer = require("inquirer");

// File system import
const fs = require("fs");

// Importing classes from ./lib/shapes 
const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, answers) {
  let svgInfo = "";

  // SVG opening tag
  svgInfo = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  svgInfo += "<g>";

  // Append the selected shape to the SVG string
  svgInfo += `${answers.shape}`;

  // Conditional Statement check takes user's input from choices array and then adds polygon properties and shape color to the SVG string
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgInfo += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgInfo += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgInfo += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  // Adds text to the SVG 
  svgInfo += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

  svgInfo += "</g>";

  // Closes SVG
  svgInfo += "</svg>";

  // Writes the SVG info to the specified file
  fs.writeFile(fileName, svgInfo, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

function promptUser() {
  inquirer
    .prompt([
      // Text prompt
      {
        type: "input",
        message:
          "What text would you like your logo to display? (Enter up to three characters)",
        name: "text",
      },
      // Text color prompt
      {
        type: "input",
        message:
          "Choose text color",
        name: "textColor",
      },
      // Shape choice prompt
      {
        type: "list",
        message: "What shape do you want your log to be?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      // Shape color prompt
      {
        type: "input",
        message:
          "Choose shape color",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      // Error handling for text prompt
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        // Calling write file function to generate SVG file
        writeToFile("logo.svg", answers);
      }
    });
}

// Calling promptUser function so inquirer prompts fire off when the application is run
promptUser();
