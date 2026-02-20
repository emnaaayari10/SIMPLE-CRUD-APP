const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter a name"],
  },
  email: {
    type: String,
    required: [true, "please enter an email"],
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
  }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;