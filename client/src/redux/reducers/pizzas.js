const initialState = {
  items: [],
  isLoaded: false,
};

export const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
      };
    case 'SET_IS_LOADED':
      return {
        ...state,
        isLoaded: true,
      };
    default:
      return state;
  }
};
