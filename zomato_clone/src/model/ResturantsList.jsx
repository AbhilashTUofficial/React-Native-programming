

// Recommended Restaurant ID
export const RecommendedList = [1, 2, 3, 4];

// Biryani Restaurant ID
export const BiryaniList = [3, 2, 1, 5];

// All Restaurants
export const Restaurants = [
    {
        id: 1,
        storeName: "BnB Mess",
        img: require('../assets/food_items/biryani_item.png'),
        items: "Fast Food, Burger, Biryani",
        location: "Sulthan Bathery Locality, Sulthan Bathery",
        travelTime: "40 min. 2km",
        cost: "150 for one",
        ratting: "4.6",
        categories: [
            {
                title: "Recommended",
                items: [{
                    itemTitle: "Chicken Burger Combo",
                },
                {
                    itemTitle: "Chicken Cheese Burger",
                }
                ]
            },
            {
                title: "Special",
                items: [{
                    itemTitle: "Chicken Burger Combo",

                }]
            }
        ],


    },
    {
        id: 2,
        storeName: "KFC",
        img: require('../assets/food_items/burger_item.png'),
        items: "South Indian",
        travelTime: "40 min. 2km",
        cost: "150 for one",
        ratting: "3.8"
    },
    {
        id: 3,
        storeName: "Star Kitchen",
        img: require('../assets/food_items/cheesefries_item.png'),
        items: "Fast Food, Burger, Biryani",
        travelTime: "40 min. 2km",
        cost: "150 for one",
        ratting: "4.0"
    },
    {
        id: 4,
        storeName: "Chicking",
        img: require('../assets/food_items/chickencurry_item.png'),
        items: "South Indian",
        travelTime: "40 min. 2km",
        cost: "150 for one",
        ratting: "4.2"
    },
    {
        id: 5,
        storeName: "Biriyani Hut",
        img: require('../assets/food_items/soup_item.png'),
        items: "Fast Food, Burger, Biryani",
        travelTime: "40 min. 2km",
        cost: "150 for one",
        ratting: "2.6"
    },

];