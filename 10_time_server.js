var net = require('net');

function main() {
  if(process.argv.length < 3)
    return console.log("ERROR: please provide a port.");
  var port = Number(process.argv[2]);
  var server = net.createServer(function (socket) {
    let date = new Date();
    let month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : '' + (date.getMonth() + 1);
    let day = date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate();
    let dateString = date.getFullYear() + "-" + month + "-" + day + " ";
    dateString += date.getHours() + ':' + date.getMinutes() + '\n';
    socket.end(dateString);
  });
  server.listen(port);
}
main();
