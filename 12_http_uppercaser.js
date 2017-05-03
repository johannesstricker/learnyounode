var http = require('http');
var map = require('through2-map');

function main() {
    if(process.argv.length < 3)
      return console.log('ERROR: please provide a port number.');
    var port = Number(process.argv[2]);
    var server = http.createServer(function(request,response) {
      if(request.method === 'POST')
      {
        request.pipe(map(function(chunk) {
          return chunk.toString().toUpperCase();
        })).pipe(response);
      }
    });
    server.listen(port);
}
main();
