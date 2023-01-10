const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sneakerSchema = require('./sneakerSchema');

const lineSneakerSchema = new Schema({
  qty: { type: Number, default: 1 },
  sneaker: sneakerSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineSneakerSchema.virtual('extPrice').get(function() {
  // 'this' is bound to the lineSneaker subdoc
  return this.qty * this.sneaker.price;
});

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  lineSneakers: [lineSneakerSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineSneakers.reduce((total, sneaker) => total + sneaker.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function() {
  return this.lineSneakers.reduce((total, sneaker) => total + sneaker.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  // 'this' is the Order model
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // update
    { user: userId },
    // upsert option will create the doc if
    // it doesn't exist
    { upsert: true, new: true }
  );
};

orderSchema.methods.addSneakerToCart = async function(sneakerId) {
  const cart = this;
  // Check if sneaker already in cart
  const lineSneaker = cart.lineSneakers.find(lineSneaker => lineSneaker.sneaker._id.equals(sneakerId));
  if (lineSneaker) {
    lineSneaker.qty += 1;
  } else {
    const sneaker = await mongoose.model('Sneaker').findById(sneakerId);
    cart.lineSneakers.push({ sneaker });
  }
  return cart.save();
};

// Instance method to set an sneaker's qty in the cart (will add sneaker if does not exist)
orderSchema.methods.setSneakerQty = function(sneakerId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line sneaker in the cart for the menu sneaker
  const lineSneaker = cart.lineSneakers.find(lineSneaker => lineSneaker.sneaker._id.equals(sneakerId));
  if (lineSneaker && newQty <= 0) {
    // Calling remove, removes itself from the cart.lineSneakers array
    lineSneaker.remove();
  } else if (lineSneaker) {
    // Set the new qty - positive value is assured thanks to prev if
    lineSneaker.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);