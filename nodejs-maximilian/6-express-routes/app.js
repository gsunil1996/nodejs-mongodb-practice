const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log("In the middleware!");
    res.send('<h1>This is add products page</h1>');
})

app.use('/', (req, res, next) => {
    console.log("In the another middleware!");
    res.send('<h1>Hellow from Express!</h1>')
})


app.listen(3000)