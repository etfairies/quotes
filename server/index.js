const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Set routing
var routes = require('./routes');
app.use('/', routes);

// Priority serve any static files.
app.use(express.static(path.join(__dirname, '../react-ui/build')));

// Get index page
app.get('/', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/public', 'index.html'));
});

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});