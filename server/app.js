const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Set routing
var routes = require('./routes');
app.use('/', routes);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));


// All remaining requests return the React app, so it can handle routing.
//app.get('*', function(request, response) {
//  response.sendFile(path.resolve(__dirname, '../react-ui/public', 'index.html'));
//});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;