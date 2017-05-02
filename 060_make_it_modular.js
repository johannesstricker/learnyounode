var ls = require('./061_module.js');

function main() {
    if(process.argv.length < 4)
      return console.log('ERROR: please provide a dir and file extension.');
    ls(process.argv[2], process.argv[3], function callback(error, data) {
      data.forEach(function(file) {
        console.log(file);
      });
    });
}
main();
