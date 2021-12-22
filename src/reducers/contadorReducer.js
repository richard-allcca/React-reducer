import { TYPES } from "../actions/contadorActions";

export const contadorInitialState = { count: 0 };

export const contadorInit = (initialState) => {
  return {
    count: initialState.count + 100,
  };
};

export function contadorReducer(state, actions) {
  switch (actions.type) {
    case TYPES.INCREMENT:
      return { count: state.count + 1 };
    case TYPES.DECREMENT:
      return { count: state.count - 1 };
    case TYPES.INCREMENT_5:
      return { count: state.count + actions.payload };
    case TYPES.DECREMENT_5:
      return { count: state.count - actions.payload };
    case TYPES.RESET:
      return contadorInitialState;
    default:
      return state;
  }
}
