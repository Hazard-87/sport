import axios from 'axios';

export const fetchItems = () => async (dispatch) => {
  let response = await axios.get('http://u0362146.plsk.regruhosting.ru/match');
  let res = await axios.get('http://u0362146.plsk.regruhosting.ru/league');
  let country = await axios.get('http://u0362146.plsk.regruhosting.ru/country');
  dispatch(setItems(response.data));
  dispatch(setLeugas(res.data));
  dispatch(setCountry(country.data));
};

export const setItems = (items) => ({
  type: 'SET_ITEMS',
  payload: items,
});
export const setLeugas = (items) => ({
  type: 'SET_LEUGAS',
  payload: items,
});

export const setCountry = (items) => ({
  type: 'SET_COUNTRY',
  payload: items,
});

export const setVisible = (items) => ({
  type: 'SET_VISIBLE',
  payload: items,
});
