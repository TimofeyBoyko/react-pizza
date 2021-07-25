const { Schema, model } = require('mongoose');

const schema = Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  cost: { type: Number, required: true },
  sizes: { type: Array, required: true },
  types: { type: Array, required: true },
});

module.exports = model('Pizza', schema);
