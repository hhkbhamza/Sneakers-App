const Sneaker = require('../../models/sneaker');

module.exports = {
  index,
  show
};

async function index(req, res) {
  try{
    const sneakers = await Sneaker.find({}).sort('name').populate('category').exec();
    // re-sort based upon the sortOrder of the categories
    sneakers.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(sneakers);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const sneaker = await Sneaker.findById(req.params.id);
    res.status(200).json(sneaker);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}