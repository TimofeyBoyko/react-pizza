import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { Cards } from '../components/Cards';
import { Filterbar } from '../components/Filterbar';

export const Home = () => {
  const [pizza, setPizza] = useState([]);

  const getPizza = useCallback(async () => {
    const { data } = await axios.get('http://localhost:5000/api/pizza/');

    setPizza(data);
  }, [setPizza]);

  useEffect(() => {
    getPizza();
  }, [getPizza]);
  return (
    <>
      <Filterbar />
      <Cards pizza={pizza} />
    </>
  );
};
