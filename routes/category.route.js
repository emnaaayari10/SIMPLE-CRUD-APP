const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");

// get all categories
router.get("/", protect , getCategories);

// get one category
router.get("/:id", protect, getCategory);

// create category
router.post("/", protect , createCategory);

// update category
router.put("/:id", protect, updateCategory);

// delete category
router.delete("/:id", protect , deleteCategory);

module.exports = router;