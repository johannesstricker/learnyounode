http = require('http');
fs = require('fs');

function main() {
    if(process.argv.length < 4)
      return console.log('Please provide a port number and a file path.');
    var port = Number(process.argv[2]);
    var filepath = process.argv[3];

    var server = http.createServer(function(request,response) {
      var filestream = fs.createReadStream(filepath);
      filestream.on('open', function() {
        filestream.pipe(response);
      });
      filestream.on('error', function(error) {
        console.log(error);
      })
    });
    server.listen(port);
}
main();
