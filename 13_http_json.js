var http = require('http');
var url = require('url');

function respondParseTime(date, response) {
  var jsonResponse = {
    'hour': date.getHours(),
    'minute': date.getMinutes(),
    'second': date.getSeconds()
  };
  response.end(JSON.stringify(jsonResponse));
}
function respondUnixTime(date, response) {
  var jsonResponse = {
    'unixtime': date.getTime()
  };
  response.end(JSON.stringify(jsonResponse));
}

function main() {
    if(process.argv.length < 3)
      return console.log('ERROR: please provide a port number.');

    var port = Number(process.argv[2]);
    var server = http.createServer(function(request, response) {
      response.writeHead(200, { 'Content-Type': 'application/json' })
      parsedRequest = url.parse(request.url, true);
      if(parsedRequest.pathname === '/api/parsetime') {
        respondParseTime(new Date(parsedRequest.query.iso), response);
      }
      else if(parsedRequest.pathname === '/api/unixtime') {
        respondUnixTime(new Date(parsedRequest.query.iso), response);
      }
      else {
        response.end('');
      }
    });
    server.listen(port);
}
main();
