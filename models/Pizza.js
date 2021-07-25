const { Schema, model } = require('mongoose');

const schema = Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  cost: { type: Number, required: true },
  sizes: [
    {
      size: { type: String },
      active: { type: Boolean },
      coefficient: { type: Number },
    },
  ],
  types: [
    {
      type: { type: String },
      active: { type: Boolean },
      coefficient: { type: Number },
    },
  ],
});

module.exports = model('Pizza', schema);
