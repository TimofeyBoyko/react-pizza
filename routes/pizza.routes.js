const { Router } = require('express');
const Pizza = require('../models/Pizza');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await Pizza.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попоробуйте снова' });
  }
});

module.exports = router;
