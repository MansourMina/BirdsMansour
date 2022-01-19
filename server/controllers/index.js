const model = require('../model/birds');

const getBirds = (req, res) => {
  res.status(200).send(model.getBirds());
};
const updateBird = async (req, res) => {
  const result = await model.updateBird(req.params.id, req.body);
  res.status(200).send(result);
  console.log('Observed Bird:', result);
  console.log(`Observed by: ${req.body.name}`);
};

module.exports = { getBirds, updateBird };
