const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product}],
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id'});
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });

    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(
      { tag_name: req.body.tag_name },
      { 
        where: { id: req.params.id },
        returning: true 
      }
    );
    res.status(200).json(updatedTag[0]); 
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tagId = req.params.id;

  try {
      const tag = await Tag.destroy({where: {id: tagId}});

      if (!tag) {
          return res.status(404).json({ message: 'Tag not found' });
      }

      return res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting tag' });
  }
});

module.exports = router;
