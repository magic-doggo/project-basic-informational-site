const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer(function (req, res) {
    let myUrl = url.parse(req.url, true);
    let filename;
    if (myUrl.pathname === '/') { filename = "./index.html" } //(|| myUrl.pathname === '') seems to not be needed, pathname is set to "/" even if empty?
    else if (myUrl.pathname === '/contact-me' || myUrl.pathname === '/about') {
        filename = '.' + myUrl.pathname + '.html'
    }
    else filename = './404.html'
    fs.readFile(filename, function (err, data) {
        // if (err) {
        //     res.writeHead(404, { 'Content-Type': 'text/html' });
        //     return res.end('404 Not FOund');
        // }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen(8080)