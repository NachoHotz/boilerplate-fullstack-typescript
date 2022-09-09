import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

export type State = ReturnType<typeof rootReducer>;
export default store;
