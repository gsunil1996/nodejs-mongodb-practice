const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");

const userListRoutes = require('./routes/usersList');
const addUserRoutes = require('./routes/addUsers');

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(userListRoutes);
app.use(addUserRoutes.routes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: "Page Not Found" })
})

app.listen(3000);