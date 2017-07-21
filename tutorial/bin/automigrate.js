var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.pg;
ds.autoupdate('evenTypes', function(err) {
  if (err) throw err;
});