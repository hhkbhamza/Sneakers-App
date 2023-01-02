const sneaker = require('./sneaker');

const Schema = require('mongoose').Schema;

const sneakerSchema = new Schema({
  name: { type: String, required: true },
  image: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = sneakerSchema;