const model = require('../model/birds');

const getBirds = (req, res) => {
  res.status(200).send(model.getBirds());
};
const updateBird = (req, res) => {
  res.status(200).send(model.updateBird(req.params.id, req.body));
};

module.exports = { getBirds, updateBird };
