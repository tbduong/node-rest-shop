const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

//create server
const server = http.createServer(app);

//start the server and execute whatever listening or function that we pass into "createServer"
server.listen(port);
