const initialState = {
  items: [],
  totalCost: 0,
  totalCount: 0,
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        items: action.payload,
      };
    case 'ADD_CART_ITEM': {
      return {
        ...state,
        items: action.payload,
      };
    }
    case 'REMOVE_CART_ITEM':
      return {
        ...state,
        items: action.payload,
      };
    case 'SET_TOTAL_COST':
      return {
        ...state,
        totalCost: action.payload,
      };
    case 'SET_TOTAL_COUNT':
      return {
        ...state,
        totalCount: action.payload,
      };
    default:
      return state;
  }
};
