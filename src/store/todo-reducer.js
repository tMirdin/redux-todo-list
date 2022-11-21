import { ADD_TODO, GET_TODO } from "./todo-actions";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.payload];
    }
    case GET_TODO: {
      return action.payload;
    }
    default:
      return state;
  }
};
