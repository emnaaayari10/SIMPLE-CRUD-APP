const express = require("express");
const Product = require("../models/product.model.js");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');


router.get('/', protect , getProducts);
router.get("/:id" , protect, getProduct);

router.post("/", protect, createProduct);

// update a product
router.put("/:id", protect, updateProduct);

// delete a product
router.delete("/:id", protect, deleteProduct);




module.exports = router;