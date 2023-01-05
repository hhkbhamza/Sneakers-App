const express = require('express');
const router = express.Router();
const sneakersCtrl = require('../../controllers/api/sneakers');

// GET /api/sneakers
router.get('/', sneakersCtrl.index);
// GET /api/sneakers/:id
router.get('/gallery/:id', sneakersCtrl.show);


module.exports = router;