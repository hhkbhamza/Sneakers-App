// const Order = require('../../models/order');

// module.exports = {
//   checkout,
// };



// // Update the cart's isPaid property to true
// async function checkout(req, res) {
//   try{
//     const cart = await Order.getCart(req.user._id);
//     cart.isPaid = true;
//     await cart.save();
//     res.status(200).json(cart);
//   }catch(e){
//     res.status(400).json({ msg: e.message });
//   }  
// }
const Order = require('../../models/order');
// const Sneaker = require('../../models/sneaker');

module.exports = {
  cart,
  addToCart,
  setSneakerQtyInCart,
  checkout,
  history
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

// Add an sneaker to the cart
async function addToCart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    await cart.addSneakerToCart(req.params.id);
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

// Updates an sneaker's qty in the cart
async function setSneakerQtyInCart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    await cart.setSneakerQty(req.body.sneakerId, req.body.newQty);
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

// Return the logged in user's paid order history
async function history(req, res) {
  // Sort most recent orders first
  try{
    const orders = await Order
      .find({ user: req.user._id, isPaid: true })
      .sort('-updatedAt').exec();
    res.status(200).json(orders);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }

}