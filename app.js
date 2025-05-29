const express = require('express');
const app = express();


app.get('/', function(req, res, next) {
    const fileName = "/index.html";
    res.sendFile(__dirname + fileName)
    // fs.readFile(fileName, function (err, data) {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     return res.end();
    // })
})

app.get(['/contact-me'], function(req, res, next) {
    const fileName = "/contact-me.html";
    res.sendFile(__dirname + fileName);
})

app.get(['/about'], function(req, res, next) {
    const fileName = "/about.html";
    res.sendFile(__dirname + fileName);
})

app.all(/.*/, function(req, res, next) {
    const fileName = "/404.html";
    res.sendFile(__dirname + fileName);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('express app on port', PORT))

