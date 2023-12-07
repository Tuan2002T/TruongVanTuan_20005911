import { createStore } from 'redux';
import counterReducer from './counter';

let store = createStore(counterReducer);

export default store;