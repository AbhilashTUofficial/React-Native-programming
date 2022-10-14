import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import ElongatedCard from './ElongatedCard';


const Recommended = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            storeName: "BnB Mess",
            img: require('../assets/food_items/biryani_item.png'),
            travelTime: "31 min. 1 km",
            cost: "150 for one",
            ratting: "4.6"
        },
        {
            id: 2,
            storeName: "KFC",
            img: require('../assets/food_items/burger_item.png'),
            travelTime: "31 min. 1 km",
            cost: "150 for one",
            ratting: "3.8"
        },
        {
            id: 3,
            storeName: "Star Kitchen",
            img: require('../assets/food_items/cheesefries_item.png'),
            travelTime: "31 min. 1 km",
            cost: "150 for one",
            ratting: "4.0"
        },
        {
            id: 4,
            storeName: "Chicking",
            img: require('../assets/food_items/chickencurry_item.png'),
            travelTime: "31 min. 1 km",
            cost: "150 for one",
            ratting: "4.2"
        },
        {
            id: 5,
            storeName: "Biriyani Hut",
            img: require('../assets/food_items/soup_item.png'),
            travelTime: "31 min. 1 km",
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
                horizontal
                showsHorizontalScrollIndicator={false}>
                {
                    items.map((i) => {
                        return (
                            <ElongatedCard
                                item={i}
                                key={i.id} />

                        );
                    })}
            </ScrollView>

        </View>
    );
};

export default Recommended;

