const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
      type: String,
      unique: true,
      required: "true",
    },
    email: {
      type: String,
      unique: true,
      required: "true",
    },
    thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: "thoughts"}],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "users"}],
  });
  
  const userModel = mongoose.model("user", userSchema);
  module.exports = userModel;