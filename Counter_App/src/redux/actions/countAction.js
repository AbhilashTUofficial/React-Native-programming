// redux/actions/countAction.js

//! This is where each actions specified.
// export var_name should be same as import var_name @ home.js
export const incrementCount = () => {
  return {
    type: 'count_increment',
  };
};

export const decrementCount = () => {
  return {
    type: 'count_decrement',
  };
};
