const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");


const {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.controller");

// get all orders
router.get("/", protect, getOrders);

// get one order
router.get("/:id", protect, getOrder);

// create order
router.post("/", protect, createOrder);

// update order
router.put("/:id", protect, updateOrder);

// delete order
router.delete("/:id", protect , deleteOrder);

module.exports = router;