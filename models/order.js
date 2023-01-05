const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: { type: String, required: true },
  sneaker: { type: String, required: true },
  isPaid: Boolean
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);