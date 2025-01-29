import { useReducer } from "react";

export const useForm = () => {
  const DEAFULT_VALUE = { name: "", text: "", rating: 5 };
  const SET_NAME_ACTION = "SET_NAME_ACTION";
  const SET_TEXT_ACTION = "SET_TEXT_ACTION";
  const CLEAR_ACTION = "CLEAR_ACTION";
  const INCREMENT_ACTION = "INCREMENT_ACTION";
  const DECREMENT_ACTION = "DECREMENT_ACTION";
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case SET_NAME_ACTION:
        return {
          ...state,
          name: payload,
        };
      case SET_TEXT_ACTION:
        return {
          ...state,
          text: payload,
        };
      case CLEAR_ACTION:
        return {
          ...DEAFULT_VALUE,
        };
      case INCREMENT_ACTION:
        return {
          ...state,
          rating: Math.min(state.rating + 1, 5),
        };
      case DECREMENT_ACTION:
        return {
          ...state,
          rating: Math.max(state.rating - 1, 1),
        };
      default:
        return state;
    }
  };

  const [form, dispatch] = useReducer(reducer, DEAFULT_VALUE);

  const setName = (value) =>
    dispatch({ type: SET_NAME_ACTION, payload: value });
  const setText = (value) =>
    dispatch({ type: SET_TEXT_ACTION, payload: value });
  const clear = () => dispatch({ type: CLEAR_ACTION });
  const increment = () => dispatch({ type: INCREMENT_ACTION });
  const decrement = () => dispatch({ type: DECREMENT_ACTION });

  return {
    form,
    setName,
    setText,
    clear,
    increment,
    decrement,
  };
};
