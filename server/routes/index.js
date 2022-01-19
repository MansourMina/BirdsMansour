const express = require('express');

const router = express.Router();
const { getBirds, updateBird } = require('../controllers');

router.get('/birds', getBirds);
router.patch('/bird/:id', updateBird);

module.exports = router;
