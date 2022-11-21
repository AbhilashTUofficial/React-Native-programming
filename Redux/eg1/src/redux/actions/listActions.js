export const addItem = itemName => {
  console.log(itemName);
  return {
    type: 'add_item',
    payload: {
      itemName: itemName,
    },
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
    payload: {
      index: i,
    },
  };
};
