import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { secondary } from '../constants';
import ElongatedCard from './ElongatedCard';
import RestaurantCard from './RestaurantCard';


const RestaurantsScrollView = () => {

    const [stores, setItems] = useState([
        {
            id: 1,
            storeName: "BnB Mess",
            img: require('../assets/food_items/biryani_item.png'),
            items: "Fast Food, Burger, Biryani",
            cost: "150 for one",
            ratting: "4.6"
        },
        {
            id: 2,
            storeName: "KFC",
            img: require('../assets/food_items/burger_item.png'),
            items: "South Indian",
            cost: "150 for one",
            ratting: "3.8"
        },
        {
            id: 3,
            storeName: "Star Kitchen",
            img: require('../assets/food_items/cheesefries_item.png'),
            items: "Fast Food, Burger, Biryani",
            cost: "150 for one",
            ratting: "4.0"
        },
        {
            id: 4,
            storeName: "Chicking",
            img: require('../assets/food_items/chickencurry_item.png'),
            items: "South Indian",
            cost: "150 for one",
            ratting: "4.2"
        },
        {
            id: 5,
            storeName: "Biriyani Hut",
            img: require('../assets/food_items/soup_item.png'),
            items: "Fast Food, Burger, Biryani",
            cost: "150 for one",
            ratting: "2.6"
        },

    ]);

    return (
        <View
            style={{

                width: "100%",
                paddingVertical: 6
            }}>
            <ScrollView
                showsHorizontalScrollIndicator={false}>
                {
                    stores.map((i) => {
                        // const image = require(i.img);
                        return (
                            <RestaurantCard
                                store={i}
                                key={i.id} />
                        );
                    })}
            </ScrollView>

        </View>
    );
};

export default RestaurantsScrollView;

