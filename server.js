//require http module
const http = require('http');

//create http server 
const server = http.createServer(function(request,response) {
    
    const head = {
        'Content-Type':'title/plain'
    }  
//send the response header to the request
response.writeHead(200,head)

//send the response body  and indicate that message is complete
  
  response.end('Hello World';)
})
 
//start http server listening for connections
server.listen(8080)
 

 

 