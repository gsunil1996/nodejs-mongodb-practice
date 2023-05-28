const express = require('express');

const router = express.Router();

const users = [];

router.get('/add-users', (req, res, next) => {
    res.render("addUsers", { pageTitle: "ADD USERS" })
})

router.post('/add-users', (req, res, next) => {
    console.log(req.body);
    users.push({ username: req.body.username });
    res.redirect("/")
})

exports.routes = router;
exports.users = users;