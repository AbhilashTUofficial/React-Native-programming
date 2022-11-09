const INITIAL_STATE = {
  shops: [
    {
      id: 1,
      title: 'PogTasty Restaurant',
      description:
        'This cube will keep you busy the entire day and it is very fun to play with',
      image: require('../../assets/img/chickencurry.jpg'),
      liked: false,
      items: [
        {itemName: 'item 1', price: '150', count: 0},
        {itemName: 'item 2', price: '250', count: 0},
        {itemName: 'item 3', price: '30', count: 0},
      ],
    },
    {
      id: 2,
      title: 'PeepoShy Clothing',
      description:
        'Get a big cup of coffee every morning before the day starts',
      image: require('../../assets/img/cloths.jpg'),
      liked: false,
      items: [
        {itemName: 'item 4', price: '150', count: 0},
        {itemName: 'item 5', price: '30', count: 0},
      ],
    },
    {
      id: 3,
      title: 'OUI Books',
      description:
        'These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people',
      image: require('../../assets/img/books.jpeg'),
      liked: false,
      items: [
        {itemName: 'item 6', price: '50', count: 0},
        {itemName: 'item 7', price: '250', count: 0},
        {itemName: 'item 8', price: '30', count: 0},
      ],
    },
  ],
  cart: [],
  currentShop: 'null',
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Get shop shops array
      const shop = state.shops.find(shop => shop.id === action.payload.id);
      // Check if item is in cart already
      shop.items.map(item => {
        if (item.itemName === action.payload.itemName) {
          item.count += 1;
        }
      });

      return {
        ...state,
        cart: shop,
      };
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

    default:
      return state;
  }
};

export default shopReducer;
