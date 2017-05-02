var fs = require('fs');
var path = require('path');

module.exports = function(dir, extension, callback) {
  fs.readdir(dir, function onDone(error, list) {
    if(error)
      return callback(error, null);
    var result = [];
    list.forEach(function(file) {
      if(path.extname(file) === '.' + extension) {
        result.push(file);
      }
    });
    callback(null, result);
  });
}
