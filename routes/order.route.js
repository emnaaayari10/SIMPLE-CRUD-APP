const express = require("express");
const router = express.Router();

const {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.controller");

// get all orders
router.get("/", getOrders);

// get one order
router.get("/:id", getOrder);

// create order
router.post("/", createOrder);

// update order
router.put("/:id", updateOrder);

// delete order
router.delete("/:id", deleteOrder);

module.exports = router;