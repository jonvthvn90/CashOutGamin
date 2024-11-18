const Test = require('./test-model');

const getAllTests = async () => {
  const tests = await Test.find();
  return tests;
};

const getTestById = async (id) => {
  const test = await Test.findById(id);
  return test;
};

const createTest = async (test) => {
  await test.save();
};

const updateTest = async (test) => {
  await test.save();
};

const deleteTest = async (id) => {
  await Test.findByIdAndRemove(id);
};

module.exports = {
  getAllTests,
  getTestById,
  createTest,
  updateTest,
  deleteTest,
};