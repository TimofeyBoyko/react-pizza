import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { Cards } from '../components/Cards';
import { Filterbar } from '../components/Filterbar';

export const Home = () => {
  const [pizzaItems, setPizzaItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const filterTypes = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закырыте'];
  const sortTypes = ['популярности', 'цене', 'алфавиту'];

  const addItemInCart = async (pizza) => {
    const { data } = await axios.post('http://localhost:5000/api/cart/add', pizza);

    if (cartItems.some((obj) => obj._id === data._id)) {
      const oldCartItems = [...cartItems];

      oldCartItems.splice(
        oldCartItems.findIndex((obj) => obj._id === data._id),
        1,
        data,
      );
      return setCartItems([...oldCartItems]);
    }
    setCartItems((prev) => [...prev, data]);
  };

  const getDataFromServer = useCallback(async () => {
    const pizza = await axios.get('http://localhost:5000/api/pizza/');
    const cart = await axios.get('http://localhost:5000/api/cart/');

    setPizzaItems(pizza.data);
    setCartItems(cart.data);
  }, [setPizzaItems]);

  useEffect(() => {
    getDataFromServer();
  }, [getDataFromServer]);
  return (
    <>
      <Filterbar filterTypes={filterTypes} sortTypes={sortTypes} />
      <Cards pizza={pizzaItems} cart={cartItems} addItemInCart={addItemInCart} />
    </>
  );
};
