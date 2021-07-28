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
      return res.status(200).json(data);
    }

    item.count = 1;
    const newPizza = new Cart(item);

    const data = await newPizza.save();
    return res.status(201).json(data);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попоробуйте снова' });
  }
});

router.post('/plus/:id', async (req, res) => {
  try {
    const pizza = await Cart.findById(req.params.id);

    const newPizza = new Cart(pizza);

    newPizza.count++;

    const data = await newPizza.save();

    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попоробуйте снова' });
  }
});

router.post('/minus/:id', async (req, res) => {
  try {
    const pizza = await Cart.findById(req.params.id);

    if (pizza.count > 1) {
      const newPizza = new Cart(pizza);

      newPizza.count--;

      const data = await newPizza.save();

      return res.status(200).json(data);
    }
    await Cart.deleteOne({ _id: pizza._id });
    return res.status(200).json({ message: 'Удалено' });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попоробуйте снова' });
  }
});

router.post('/remove/:id', async (req, res) => {
  try {
    await Cart.deleteOne(req.params.id);
    return res.status(200).json({ message: 'Удалено' });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попоробуйте снова' });
  }
});

router.post('/clear', async (req, res) => {
  try {
    await Cart.deleteMany();
    return res.status(200).json({ message: 'Очищено' });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попоробуйте снова' });
  }
});

module.exports = router;
