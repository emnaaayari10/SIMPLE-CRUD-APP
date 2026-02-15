const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

// Connexion à MongoDB et lancement du serveur
mongoose.connect("mongodb+srv://admin:admin@backend-db.26cjlyk.mongodb.net/Node-API?appName=backend-db")
.then(() => {
    console.log("connected to db !");
    app.listen(3000, () => console.log('server is running on port 3000'));
})
.catch(() => {
    console.log("connection failed !");
});
