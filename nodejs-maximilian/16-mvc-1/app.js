const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const errorController = require("./controllers/errorController");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404page);
app.listen(3000);
