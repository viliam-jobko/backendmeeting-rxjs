const http = require("http");
const fs = require('fs');


http.createServer((request, response) => {
  const body = {
    magicNumber: parseInt(fs.readFileSync('magic_number.txt', {encoding: 'ascii'})),
    timestamp: Date.now()
  };
  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(JSON.stringify(body, null, 2));
}).listen(process.env.PORT || 3005);

console.log('Server running at http://127.0.0.1:3005/');
