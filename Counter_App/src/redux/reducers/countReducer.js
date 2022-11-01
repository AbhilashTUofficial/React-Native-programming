//! This is where the actual function is stated.

const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'count_increment':
      return {
        ...state,
        count: add(state),
      };
    case 'count_decrement':
      return {
        ...state,
        count: sub(state),
      };
    default:
      return state;
  }
};

//! Functions

const add = state => {
  return state.count + 1;
};

const sub = state => {
  if (state.count > 0) {
    return state.count - 1;
  }
  return state.count;
};
