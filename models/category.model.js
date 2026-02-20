const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter a category name"],
  },
  description: {
    type: String,
    required: false,
  }
}, { timestamps: true });

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;