const birds = require('../birds.json');

const getBirds = () => birds;
const updateBird = (id, body) => {
  const bird = birds.find((el) => el.id === Number(id));
  bird.count += 1;
  bird.observer.push(body.name);
  return bird;
};

module.exports = { getBirds, updateBird };
