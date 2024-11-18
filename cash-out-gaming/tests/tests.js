const express = require('express');
const router = express.Router();
const Test = require('./test-model');

router.get('/', async (req, res) => {
  const tests = await Test.find();
  res.send(tests);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const test = await Test.findById(id);
  res.send(test);
});

router.post('/', async (req, res) => {
  const test = new Test(req.body);
  await test.save();
  res.send({ message: 'Test created successfully' });
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const test = await Test.findById(id);
  test.name = req.body.name;
  test.description = req.body.description;
  await test.save();
  res.send({ message: 'Test updated successfully' });
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await Test.findByIdAndRemove(id);
  res.send({ message: 'Test deleted successfully' });
});

module.exports = router;