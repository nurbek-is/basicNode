const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    let head = {
        'Content-Type': 'text/html; charset=UTF-8'
    }

    let status = 200;
    let title, body;
    let img;
    switch(request.url) {
        case '/':
           title = 'Welcome!';
           body = `<h1>Welcome to our Home Page!</h1>
           <a href="contact">Contact us</a>`;
           break;
        case '/contact':
            title = 'Contact Us';
            body = `<h1>Contact Us</h1>
            <p>Call us at 555-555-5555.</p>
            <a href="/">Home</a>`;
            break;
        case '/favicon.ico':
            img = fs.readFileSync('./favicon.ico');
            head = {
                'Content-Type': 'image/x-icon'
            }
            break;
        default:
            status = 404;
            title = '404: Page Not Found';
            body = `<h1>404: Page Not Found</h1>
            <p>Sorry, that page doesn't exist.</p>
            <a href="/">Home</a>`;
    }

    response.writeHead(status, head);
    if (typeof img === 'undefined') {
        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>${title}</title>
        </head>
        <body>${body}</body>
        </html>`;
        response.end(html);
    } else {
        response.end(img, 'binary');
    }

    console.log(request.url);
});

server.listen(8080);