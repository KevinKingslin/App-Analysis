var shell = require("shelljs");
var cp = require("child_process");
var process = require("process");
// shell.exec("../scripts/test.sh");
cp.exec(`${process.cwd()}/scripts/test.sh`, (error, stdout, stderr) => {
  console.log(stdout);
  console.log(stderr);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
});
