const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./category');

const sneakerSchema = require('./sneakerSchema');

module.exports = mongoose.model('Sneaker', sneakerSchema);