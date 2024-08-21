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
  sol.question('Enter the line number (or "q" to quit): ', (lineNumber) => {
    if (lineNumber.toLowerCase() === "q") {
      console.log("Thankyou for using the System, have a Great Day!");
      sol.close();
      return;
    }

    fs.readFile("poem.txt", "utf8", (err, data) => {
      if (err) throw err;

      const lines = data.split("\n");
      const desiredLine = lines[lineNumber - 1];

      if (desiredLine) {
        console.log(`${desiredLine}`);
      } else {
        console.log("Line number out of range.");
      }

      promptForLineNumber();
    });
  });
}

promptForLineNumber();
