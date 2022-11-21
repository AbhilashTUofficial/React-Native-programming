import {initialItems} from '../../model/data';

export default (state = initialItems, action) => {
  switch (action.type) {
    case 'add_item':
      return addItem(state, action.payload.itemName);
    case 'removeall_item':
      return [];
    case 'remove_item':
      return removeItem(state, action.payload.index);
    default:
      return [...state];
  }
};

//! Functions

const addItem = (state, itemName) => {
  return [...state, itemName];
};

const removeItem = (state, i) => {
  state = state.filter(item => state.indexOf(item) !== i);
  return [...state];
};
