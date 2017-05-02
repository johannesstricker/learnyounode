var fs = require('fs');
var path = require('path');

function callback(error, list) {
  if(error)
    return console.log(error);
  var fileExtension = '.' + process.argv[3];
  list.forEach(function(file) {
    if(path.extname(file) === fileExtension)
      console.log(file);
  });
}
function main() {
  var dir = process.argv[2];
  fs.readdir(dir, callback);
}
main();
