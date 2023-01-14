import axios from 'axios';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import multiClientMiddleware from 'redux-axios-middleware';
import hotelsReducer from './hotelsReducer';

// Combine all reducer files and add keys.
const appReducer = combineReducers({
  hotelsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STORE') {
    state = undefined;
  }
  return appReducer(state, action);
};

const CLIENT = axios.create({
  method: 'GET',
  baseURL: 'https://apidojo-booking-v1.p.rapidapi.com/properties',
  responseType: 'json',
});

const STORE = createStore(
  rootReducer,
  applyMiddleware(multiClientMiddleware(CLIENT)),
);

export default STORE;
