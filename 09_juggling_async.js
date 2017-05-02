var http = require('http');

function main() {
  if(process.argv.length < 5)
    console.log('ERROR: please provide three urls.');

  var result = ['', '', ''];
  var numFinished = 0;
  for(let i = 2; i < 5; i++)
  {
    let url = process.argv[i];
    http.get(url, function callback(response) {
      response.setEncoding('utf8');
      response.on('data', function(data) {
        result[i - 2] += data;
      });
      response.on('error', function(error) {
        console.log(error);
      });
      response.on('end', function() {
        if(++numFinished === 3)
        {
          for(let j = 0; j < 3; j++)
            console.log(result[j]);
        }
      });
    })
  }
}
main();
