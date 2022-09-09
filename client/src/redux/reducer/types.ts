import { ActionTypes } from '../actions/names';

type InitialState = {
  counter: number;
};

export type IncrementAction = {
  type: ActionTypes.INCREMENT;
  payload?: number;
};

export type DecrementAction = {
  type: ActionTypes.DECREMENT;
};

export type ResetAction = {
  type: ActionTypes.RESET;
};

export type Action = IncrementAction | DecrementAction | ResetAction;
export default InitialState;
