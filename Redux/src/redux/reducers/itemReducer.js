const initialItems = ['ONE', 'TWO', 'THREE'];

export default (state = initialItems, action) => {
  switch (action.type) {
    case 'add_item':
      return [...state, addItem(state)];
    case 'removeall_item':
      return [];
    case 'remove_item':
      return removeItem(state, action.index);
    default:
      return state;
  }
};

//! Functions

const addItem = state => {
  return 'New';
};

const removeItem = (state, i) => {
  if (i > -1) {
    state.splice(i, 1);
  }
  console.log(state);
  return [...state];
};
