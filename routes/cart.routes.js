const { Router } = require('express');
const Cart = require('../models/Cart');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await Cart.find();
    res.status(200).json(data);
  } catch (e) {}
});

router.post('/add', async (req, res) => {
  try {
    const item = { ...req.body };
    const pizza = await Cart.find({ pizzaId: item.pizzaId });

    if (
      pizza.some(
        (pizzaItem) =>
          pizzaItem.size.size === item.size.size && pizzaItem.type.type === item.type.type,
      )
    ) {
      const currentPizza = pizza.filter(
        (pizzaItem) =>
          pizzaItem.size.size === item.size.size && pizzaItem.type.type === item.type.type,
      )[0];
      currentPizza.count++;

      const newPizza = new Cart(currentPizza);

      const data = await newPizza.save();
      return res.status(201).json(data);
    }

    item.count = 1;
    const newPizza = new Cart(item);

    const data = await newPizza.save();
    return res.status(201).json(data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Что-то пошло не так, попоробуйте снова' });
  }
});

module.exports = router;
