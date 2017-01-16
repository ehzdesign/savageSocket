// Include our libraries
var http = require('http');
var path = require('path');
var socketio = require('socket.io');
var express = require('express');
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);
//random number library
var rn = require('random-number');
// Use router to point requests to the 'files' folder
router.use(express.static(path.resolve(__dirname, 'public')));
// Variables to hold the messages and the sockets


//store the random generated number of followers
var followersNum;

io.on('connection', function (socket) {
    console.log('a user connected');
    //emit the followers count number to each connection
    io.emit('update count', followersNum);

    //generate a random number to be sent back to client upon 'update request'
    socket.on('update request', function (msg) {
      // generate the random number
      followersNum = gen();
      io.emit('update count', followersNum);
    });
    
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
// Start our server
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
    var addr = server.address();
    console.log("Our server is listening at", addr.address + ":" + addr.port);
});

//generate random number with same defaults
var gen = rn.generator({
  min:  10000
, max:  99999
, integer: true
})
