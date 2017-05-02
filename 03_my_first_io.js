var fs = require('fs');

function main() {
  if(process.argv.length < 3)
    return console.log("ERROR: please provide a filepath.");
  var filepath = process.argv[2];
  var buffer = fs.readFileSync(filepath);
  var numNewLines = buffer.toString().split('\n').length - 1;
  console.log(numNewLines);
}
main();
