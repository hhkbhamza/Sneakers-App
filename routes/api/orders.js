const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');


// POST /api/orders/cart/checkout
router.post('/orders', ordersCtrl.checkout);


module.exports = router;