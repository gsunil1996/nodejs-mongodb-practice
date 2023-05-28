const express = require('express');

const app = express();

app.use('/user', (req, res, next) => {
    console.log("first middleware!");
    res.send('<h1>Sending Response from user middleware!</h1>')
})

app.use('/', (req, res, next) => {
    console.log("second middleware!");
    res.send('<h1>Sending Response from second middleware!</h1>')
})

app.listen(3000);