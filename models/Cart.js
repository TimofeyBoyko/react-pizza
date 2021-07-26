const { Schema, model, Types } = require('mongoose');

const schema = Schema({
  pizzaId: { type: Types.ObjectId, ref: 'Pizza' },
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  cost: { type: Number, required: true },
  size: {
    size: { type: String },
    active: { type: Boolean },
    coefficient: { type: Number },
  },
  type: {
    type: { type: String },
    active: { type: Boolean },
    coefficient: { type: Number },
  },
  count: { type: Number },
});

module.exports = model('Cart', schema);
