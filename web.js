var express = require('express');

var app = express.createServer(express.logger());

//var buffer = fs.readFileSync('index.html');

//console.log(buffer.toString());
//var res = buffer.toString();

app.get('/', function(request, response) {
    response.send('Hello Word test 23!');
    //response.send(buffer.toString());
    //console.log(res);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
