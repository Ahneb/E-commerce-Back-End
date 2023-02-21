const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
  Category.findAll({ 
    include: Product 
  }).then((categories) => {
    res.send(categories);
  }).then(() => {
    console.log('got all categories');
  });
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    include: Product,
  }).then((categories) => {
    res.send(categories);
  }).then(() => {
    console.log('got all categories by id');
  });
});

router.post('/', (req, res) => {
  Category.create(req.body).then(() => {
    res.send('category posted');
  });
});

router.put('/:id', (req, res) => {
  Category.update(
    req.body, { 
      where: { id: req.params.id },
  }).then(() => {
    res.send('updated categories');
  });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: { id: req.params.id },
  }).then(() => {
    res.send('deleted category');
  });
});

module.exports = router;
