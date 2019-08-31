const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId
  },
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("todo", todoSchema);
