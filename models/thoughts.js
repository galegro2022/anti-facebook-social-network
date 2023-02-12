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
  

const thoughts = new mongoose.Schema({
  thoughtText: {
    type: String,
    unique: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactions],
});

const thoughtModel = mongoose.model("thoughts", thoughts);
module.exports = thoughtModel;