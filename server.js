const http = require('http');
const server = http.createServer((request, response) => {
    const head = {
        'Content-Type': 'text/html; charset=UTF-8'
    }
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Hello, world!</title>
    </head>
    <body>
       <h1>Hello, world!</h1>
    </body>
    </html>`;

    response.writeHead(200, head);
    response.end(html);
    console.log(request.url);
});

server.listen(8080);
 