import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

export default combineReducers({
  reducer: {
    counter: counterReducer,
  },
});
