const
    http       = require('http'),
    express    = require('express'),
    socketIo   = require('socket.io');

const
    port = 5300,
    app  = express(),
    server = http.createServer(app),
    io = socketIo(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    socket.on('client-message', (text) => {
        console.log('We got ' + text + ' from client!');
        socket.emit('server-message', text);
    });
});

server.listen(port, () => console.log('Server is running on http://localhost:' + port + '/'));