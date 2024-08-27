console.log(`Welcome to Poem Line Reader!
TITLE  : ORACLE
AUTHOR : DURIEL E. HARRIS\n`);

const fs = require("fs");
const readline = require("readline");

const sol = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptForLineNumber() {
  sol.question('Enter the line number (or "q" to quit): ', handleUserInput);
}

function handleUserInput(lineNumber) {
  if (lineNumber.toLowerCase() === "q") {
    quitProgram();
  } else {
    readAndPrintLine(lineNumber);
  }
}

function quitProgram() {
  console.log("Thank you for using the System, have a Great Day!");
  sol.close();
}

function readAndPrintLine(lineNumber) {
  fs.readFile("poem.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file");
      return;
    }

    const lines = data.split("\n");
    const desiredLine = lines[lineNumber - 1];

    if (desiredLine && desiredLine.trim()) {
      console.log(desiredLine);
    } else {
      console.log("Line Number is Empty, please try again.");
    }

    promptForLineNumber();
  });
}

promptForLineNumber();
