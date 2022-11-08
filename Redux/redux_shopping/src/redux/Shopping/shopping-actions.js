export const addToCart = itemID => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id: itemID,
    },
  };
};

export const likeShop = itemID => {
  return {
    type: 'LIKE_SHOP',
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = itemID => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: 'ADJUST_ITEM_QTY',
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentShop = shop => {
  return {
    type: 'LOAD_CURRENT_SHOP',
    payload: shop,
  };
};
