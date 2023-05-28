const Product = require("../models/productModel");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { pageTitle: "ADD PRODUCT" });
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const product = Product.fetchAll();
  res.render("shop", { pageTitle: "Shop Page", prods: product });
};
