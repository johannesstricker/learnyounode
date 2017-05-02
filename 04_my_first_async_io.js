var fs = require('fs');

function callback(error, data) {
  if(error)
    return console.log(error);
  console.log(data.split('\n').length - 1);
}

function main() {
  if(process.argv.length < 3)
    return console.log("ERROR: please provide a filepath.");
  var filepath = process.argv[2];
  fs.readFile(filepath, 'utf8', callback);
}
main();
