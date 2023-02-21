const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      { 
        model: Product,
        through: ProductTag 
      },
    ],
  }).then((tag) => {
    res.send(tag);
  }).then(() => {
    console.log('got all tags');
  });
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: { id: req.params.id },
    include: [
      { 
        model: Product,
        through: ProductTag 
      },
    ],
   }).then((tag) => {
    res.send(tag);
  }).then(() => {
    console.log('got all tags by id');
  });
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create(req.body).then(() => {
    res.send('tag posted');
  });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, { where: { id: req.params.id } }).then(() => {res.send('updated tag')});
});

router.delete('/:id', (req, res) => {
  Tag.destroy({ where: { id: req.params.id } }).then(() => {res.send('deleted tag')});
});

module.exports = router;
