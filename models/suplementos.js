const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const storeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  internNumber: {
    type: Number,
    required: true,
    unique: true,
  },
});

const Supplement = mongoose.model("Supplement", storeSchema);

module.exports = {
  Supplement,
};
