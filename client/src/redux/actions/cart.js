import axios from 'axios';

const countTotalCount = (cartItems) => {
  let count = 0;
  cartItems.forEach((item) => {
    count += item.count;
  });
  return count;
};

const countTotalCost = (cartItems) => {
  let cost = 0;
  cartItems.forEach((item) => {
    cost += item.cost * item.count;
  });
  return cost;
};

//fetch data from server
export const fetchCart = () => async (dispatch) => {
  const cart = await axios.get('http://localhost:5000/api/cart/');
  dispatch(setCart(cart.data));
  dispatch(setTotalCost(countTotalCost(cart.data)));
  dispatch(setTotalCount(countTotalCount(cart.data)));
};

//save new item cart on server and state + count totalCount and totalCost
export const addCartItem = (pizza, cartItems) => async (dispatch) => {
  const { data } = await axios.post('http://localhost:5000/api/cart/add', pizza);

  if (cartItems.some((obj) => obj._id === data._id)) {
    const oldCartItems = [...cartItems];

    oldCartItems.splice(
      oldCartItems.findIndex((obj) => obj._id === data._id),
      1,
      data,
    );

    dispatch(setTotalCost(countTotalCost([...oldCartItems])));
    dispatch(setTotalCount(countTotalCount([...oldCartItems])));

    return dispatch(setCartItem([...oldCartItems]));
  }
  dispatch(setTotalCost(countTotalCost([...cartItems, data])));
  dispatch(setTotalCount(countTotalCount([...cartItems, data])));

  return dispatch(setCartItem([...cartItems, data]));
};

//button plus in cart page
export const plusCartItem = (pizza, cartItems) => async (dispatch) => {
  const { data } = await axios.post(`http://localhost:5000/api/cart/plus/${pizza._id}`);

  const oldCartItems = [...cartItems];

  oldCartItems.splice(
    oldCartItems.findIndex((obj) => obj._id === data._id),
    1,
    data,
  );

  dispatch(setTotalCost(countTotalCost([...oldCartItems])));
  dispatch(setTotalCount(countTotalCount([...oldCartItems])));

  return dispatch(setCartItem([...oldCartItems]));
};

//button minus in cart page
export const minusCartItem = (pizza, cartItems) => async (dispatch) => {
  const { data } = await axios.post(`http://localhost:5000/api/cart/minus/${pizza._id}`);

  if (pizza.count > 1) {
    const oldCartItems = [...cartItems];

    oldCartItems.splice(
      oldCartItems.findIndex((obj) => obj._id === data._id),
      1,
      data,
    );

    dispatch(setTotalCost(countTotalCost([...oldCartItems])));
    dispatch(setTotalCount(countTotalCount([...oldCartItems])));

    return dispatch(setCartItem([...oldCartItems]));
  }

  const oldCartItems = [...cartItems];

  oldCartItems.splice(
    oldCartItems.findIndex((obj) => obj._id === pizza._id),
    1,
  );

  dispatch(setTotalCost(countTotalCost([...oldCartItems])));
  dispatch(setTotalCount(countTotalCount([...oldCartItems])));

  return dispatch(setCartItem([...oldCartItems]));
};

//remove one item
export const removeCartItem = (pizza, cartItems) => async (dispatch) => {
  await axios.post(`http://localhost:5000/api/cart/minus/${pizza._id}`);

  const oldCartItems = [...cartItems];

  oldCartItems.splice(
    oldCartItems.findIndex((obj) => obj._id === pizza._id),
    1,
  );

  dispatch(setTotalCost(countTotalCost([...oldCartItems])));
  dispatch(setTotalCount(countTotalCount([...oldCartItems])));

  return dispatch(setCartItem([...oldCartItems]));
};

//clear cart
export const clearCart = () => async (dispatch) => {
  await axios.post(`http://localhost:5000/api/cart/clear`);

  dispatch(setTotalCost(0));
  dispatch(setTotalCount(0));
  dispatch(setCartItem([]));
};

export const setCart = (items) => ({
  type: 'SET_CART',
  payload: items,
});

export const setTotalCount = (count) => ({
  type: 'SET_TOTAL_COUNT',
  payload: count,
});

export const setTotalCost = (cost) => ({
  type: 'SET_TOTAL_COST',
  payload: cost,
});

export const setCartItem = (items) => ({
  type: 'ADD_CART_ITEM',
  payload: items,
});
