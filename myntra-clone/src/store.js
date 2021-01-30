import { createStore,combineReducers} from '@reduxjs/toolkit';
import {counter} from './Store/Counter/reducer'

const rootReducer =  combineReducers({
    counter: counter,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__())