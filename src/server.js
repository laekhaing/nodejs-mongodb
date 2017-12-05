var request = require('request');
var express = require('express');

var app = express();

console.log(__dirname);
// Specify the first html to show
app.use(express.static(__dirname, {'index': ['index.html', 'login.html']}));

// Add resources directory (CSS, JS, JQuery, etc.)
app.use(express.static(__dirname + '/public'));

// Optional: set the port
// If not setted, nodejs sets one

app.get('/', function(req, res) {
  res.render("index.html");
});

app.set('port', 5000);
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
