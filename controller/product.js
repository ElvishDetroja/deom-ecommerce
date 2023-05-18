const fs = require("fs");
const data = require("../model/product.js");
const Product = data.Product;

//
//
//
//
//

exports.getContent = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOne({ id: id });
  res.json(product);
};

exports.getContents = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.createContent = async (req, res) => {
  try {
    const product = await new Product(req.body);
    product.save();
    res.status(201).json(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.replaceContent = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndReplace({ id: id }, req.body, {
      new: true,
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateContent = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndUpdate({ id: id }, req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

exports.deleteContent = async (req, res) => {
  const id = +req.params.id;
  const product = await Product.findOneAndRemove({ id: id });
  res.status(201).json(product);
};