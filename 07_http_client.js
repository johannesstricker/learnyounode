var http = require('http');

function main() {
  if(process.argv.length < 3)
    return console.log("ERROR: please provide an url.");
  var url = process.argv[2];
  var response = http.get(url, function callback(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      console.log(data);
    });
    response.on('error', function(error) {
      console.log(error);
    })
  });
}
main();
