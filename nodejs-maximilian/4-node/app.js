const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("In the middleware!");
    next() // Allows the request to continue to the next middleware line;
})

app.use((req, res, next) => {
    console.log("In the another middleware!");
    res.send('<h1>Hellow from Express!</h1>')
})


//--------------------------------------------
// const server = http.createServer(app);
// server.listen(3000);

// The below code will do same thing as above two lines of code

app.listen(3000)