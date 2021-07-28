import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Cards } from '../components/Cards';
import { Filterbar } from '../components/Filterbar';
import { fetchPizzas } from '../redux/actions/pizzas';
import { fetchCart } from '../redux/actions/cart';

const filterTypes = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрыте'];
const sortTypes = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

export const Home = () => {
  const dispatch = useDispatch();

  const getDataFromServer = useCallback(() => {
    dispatch(fetchCart());
    dispatch(fetchPizzas());
  }, [dispatch]);

  useEffect(() => {
    getDataFromServer();
  }, [getDataFromServer]);

  return (
    <>
      <Filterbar filterTypes={filterTypes} sortTypes={sortTypes} />
      <Cards />
    </>
  );
};
