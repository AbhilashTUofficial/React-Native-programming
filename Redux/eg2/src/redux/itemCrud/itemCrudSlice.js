import {createSlice} from '@reduxjs/toolkit';
import {initialItems} from '../../model/data';

const itemCrudSlice = createSlice({
  name: 'itemCrud',
  initialState: initialItems,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      state.pop(state[action.payload]);
    },
    removeAllItems: state => {
      return [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addItem, removeItem, removeAllItems} = itemCrudSlice.actions;

export default itemCrudSlice.reducer;
