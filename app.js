const http = require('http');
const fs = require('fs');
const io = require('socket.io')(app);

var app = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if(err){
            res.statusCode = 500;
            res.setHeader('content-type', 'text/html');
            return res.end("<h2 style='margin: 0 auto; color: red;'>Server Error</h2>");
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
});

app.listen(3000, () => {
    console.log(`Open ${app.address().address}:${app.address().port}`);
});


io.on('connection', (socket) => {
    socket.emit('welcome', {message: 'Hello, Welcome to chat with us!'});
});
