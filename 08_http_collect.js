var http = require('http');

function main() {
  if(process.argv.length < 3)
    return console.log("ERROR: please provide url.");
  var url = process.argv[2];
  var response = http.get(url, function callback(response) {
    var buffer = '';
    response.setEncoding('utf8');
    response.on('data', function(data) {
      buffer += data.toString();
    });
    response.on('error', function(error) {
      console.log(error);
    });
    response.on('end', function() {
      console.log(buffer.length);
      console.log(buffer);
    });
  });
}
main();
