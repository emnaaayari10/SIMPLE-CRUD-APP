const express = require("express");
const router = express.Router();

const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");

// get all categories
router.get("/", getCategories);

// get one category
router.get("/:id", getCategory);

// create category
router.post("/", createCategory);

// update category
router.put("/:id", updateCategory);

// delete category
router.delete("/:id", deleteCategory);

module.exports = router;