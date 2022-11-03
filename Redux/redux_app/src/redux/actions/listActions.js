export const addItem = () => {
  return {
    type: 'add_item',
  };
};

export const removeallItem = () => {
  return {
    type: 'removeall_item',
  };
};

export const removeItem = i => {
  return {
    type: 'remove_item',
    index: i,
  };
};
