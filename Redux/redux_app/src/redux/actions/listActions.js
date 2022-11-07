export const addItem = itemName => {
  console.log(itemName);
  return {
    type: 'add_item',
    itemName: itemName,
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
