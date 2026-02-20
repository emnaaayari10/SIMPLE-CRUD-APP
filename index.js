const express = require("express");
const mongoose = require("mongoose");

const productRoute = require("./routes/product.route.js");
const userRoute = require("./routes/user.route.js");
const categoryRoute = require("./routes/category.route.js");
const orderRoute = require("./routes/order.route.js");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/orders", orderRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

// Connexion à MongoDB et lancement du serveur
mongoose.connect("mongodb+srv://admin:admin@backend-db.26cjlyk.mongodb.net/Node-API?appName=backend-db")
.then(() => {
  console.log("connected to db !");
  app.listen(3000, () => console.log("server is running on port 3000"));
})
.catch((error) => {
  console.log("connection failed !");
  console.log(error);
});