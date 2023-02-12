const mongoose = require("mongoose");

const reactions = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
});

const reactionModel = mongoose.model("reactions", reactions);
module.exports = reactionModel;