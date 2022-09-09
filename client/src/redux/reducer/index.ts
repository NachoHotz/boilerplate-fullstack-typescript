import InitialState, { Action } from './types';
import { ActionTypes } from '../actions/names';

const initialState: InitialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case ActionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case ActionTypes.RESET:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export default rootReducer;
