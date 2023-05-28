const express = require('express');

const addUserRouter = require('./addUsers');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render("usersList", { pageTitle: "users List", users: addUserRouter.users })
})

module.exports = router;