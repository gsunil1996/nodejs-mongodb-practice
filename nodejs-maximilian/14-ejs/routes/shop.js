const express = require("express");
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('shop', { pageTitle: "Shop", path: "/", prods: adminData.products });
})

module.exports = router;