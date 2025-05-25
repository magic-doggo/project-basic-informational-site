const http = require('http');
const url = require('url');
const fs = require('fs');
const express = require('express');
const app = express();


app.get('/', function(req, res, next) {
    const fileName = "index.html";
    fs.readFile(fileName, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
})

app.get(['/contact-me'], function(req, res, next) {
    const fileName = "contact-me.html";
    fs.readFile(fileName, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
})

app.get(['/about'], function(req, res, next) {
    const fileName = "about.html";
    fs.readFile(fileName, function (err, data) {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
})

app.all(/.*/, function(req, res, next) {
    const fileName = "404.html";
    fs.readFile(fileName, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('express app on port', PORT))

