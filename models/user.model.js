const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
  name: { type: String, required: [true, "please enter a name"] },
  email: { type: String, required: [true, "please enter an email"] },
  password: { type: String, required: [true, "please enter a password"] }
}, { timestamps: true });

// Hash password avant save (Mongoose 9+)
UserSchema.pre("save", async function() {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Comparer le mot de passe
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", UserSchema);
module.exports = User;