const birds = require('../birds.json');

const getBirds = () => birds;
const updateBird = (id, body) => {
  birds.forEach((el, i) => {
    if (el.id === Number(id)) {
      birds[i].count = el.count + 1;
      birds[i].observer = body.observer;
    }
  });
};

module.exports = { getBirds, updateBird };
