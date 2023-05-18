const express = require("express");

const productController = require("../controller/product.js");

const router = express.Router();

router
  .get("/", productController.getContents)
  .get("/:id", productController.getContent)
  .post("/add", productController.createContent)
  .put("/:id", productController.replaceContent)
  .patch("/:id", productController.updateContent)
  .delete("/:id", productController.deleteContent);

exports.router = router;