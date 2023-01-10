// const express = require('express');
// const router = express.Router();
// const sneakersCtrl = require('../../controllers/api/sneakers');

// // GET /api/sneakers
// router.get('/', sneakersCtrl.index);
// // GET /api/sneakers/:id
// router.get('/gallery/:id', sneakersCtrl.show);


// module.exports = router;

const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/sneakers');

// GET /api/items
router.get('/', itemsCtrl.index);
// GET /api/items/:id
router.get('/:id', itemsCtrl.show);

module.exports = router;