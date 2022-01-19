const birds = require('../birds.json');

const getBirds = () => birds;
const updateBird = (id, body) => {
  // eslint-disable-next-line consistent-return
  birds.forEach((el, i) => {
    if (el.id === Number(id)) {
      birds[i].count = el.count + 1;
      birds[i].observer.push(body.name);
    }
  });
  return birds.find((el) => el.id === Number(id));
};

module.exports = { getBirds, updateBird };
