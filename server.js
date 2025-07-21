const http = require('http');

const data = {
    message: 'Hello, this is simple data from Node.js!',
    author: 'karthika',
    status: 'success',
    time: new Date()
};

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});


o/p

PS C:\Users\user\Desktop\node> node -v       
v20.19.4
PS C:\Users\user\Desktop\node> node server.js
Server running at http://localhost:3000/

{"message":"Hello, this is simple data from Node.js!","author":"karthika","status":"success","time":"2025-07-21T10:55:49.073Z"}
