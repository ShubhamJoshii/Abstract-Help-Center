const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

CardSchema.pre("save",async function (next) {
    this.id = this._id.toString();
    next();
})

const CardModel = mongoose.model("Cards",CardSchema);

module.exports = CardModel;
