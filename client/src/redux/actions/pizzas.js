import axios from 'axios';

export const fetchPizzas = () => async (dispatch) => {
  const pizzas = await axios.get('http://localhost:5000/api/pizza/');
  dispatch(setPizzas(pizzas.data));
  dispatch(setIsLoaded(true));
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const setIsLoaded = (isLoaded) => ({
  type: 'SET_IS_LOADED',
  payload: isLoaded,
});
