const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");

const shopRoutes = require('./routes/shop');
const adminData = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.render("404", { pageTitle: "Page Not found" })
})

app.listen(3000);