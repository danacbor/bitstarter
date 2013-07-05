var express = require('express');

var app = express.createServer(express.logger());

var buffer = fs.readFileSync('index.php');

app.get('/', function(request, response) {
//  response.send('Hello Word test 2!');
    response.send(buffer,toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
