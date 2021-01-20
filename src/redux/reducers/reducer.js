const initialState = {
  items: [],
  leagues: [],
  country: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.payload };
    case 'SET_LEUGAS':
      return { ...state, leagues: action.payload };
    case 'SET_COUNTRY':
      return { ...state, country: action.payload };
    case 'SET_VISIBLE':
      return { ...state, visible: action.payload };
    default:
      return state;
  }
};

export default reducer;
