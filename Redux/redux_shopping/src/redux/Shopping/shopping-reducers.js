const INITIAL_STATE = {
  shops: [
    {
      id: 1,
      title: 'PogTasty Restaurant',
      description:
        'This cube will keep you busy the entire day and it is very fun to play with',
      image: require('../../assets/img/chickencurry.jpg'),
      liked: false,
      items: [1, 2, 3],
    },
    {
      id: 2,
      title: 'PeepoShy Clothing',
      description:
        'Get a big cup of coffee every morning before the day starts',
      image: require('../../assets/img/cloths.jpg'),
      liked: false,
      items: [1, 2],
    },
    {
      id: 3,
      title: 'OUI Books',
      description:
        'These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people',
      image: require('../../assets/img/books.jpeg'),
      liked: false,
      items: [1, 2, 3],
    },
  ],
  cart: [],
  currentShop: 'null',
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case actionTypes.ADD_TO_CART:
    //   // Great Item data from products array
    //   const item = state.shops.find(
    //     product => product.id === action.payload.id,
    //   );
    //   // Check if Item is in cart already
    //   const inCart = state.cart.find(item =>
    //     item.id === action.payload.id ? true : false,
    //   );

    //   return {
    //     ...state,
    //     cart: inCart
    //       ? state.cart.map(item =>
    //           item.id === action.payload.id
    //             ? {...item, qty: item.qty + 1}
    //             : item,
    //         )
    //       : [...state.cart, {...item, qty: 1}],
    //   };
    case 'LIKE_SHOP':
      return {
        ...state,
        shops: state.shops.map(shop =>
          shop.id === action.payload.id ? {...shop, liked: !shop.liked} : shop,
        ),
      };
    case 'LOAD_CURRENT_SHOP':
      return {
        ...state,
        currentShop: action.payload,
      };
    // case actionTypes.REMOVE_FROM_CART:
    //   return {
    //     ...state,
    //     cart: state.cart.filter(item => item.id !== action.payload.id),
    //   };
    // case actionTypes.ADJUST_ITEM_QTY:
    //   return {
    //     ...state,
    //     cart: state.cart.map(item =>
    //       item.id === action.payload.id
    //         ? {...item, qty: +action.payload.qty}
    //         : item,
    //     ),
    //   };
    default:
      return state;
  }
};

export default shopReducer;
