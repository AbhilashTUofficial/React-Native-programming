import { Image, ImageBackground, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { Component, useState } from 'react';
import { secondary } from '../constants';
import CircularCard from './CircularCard';


const FoodTypesScrollView = () => {

    const [items, setItems] = useState([
        { id: 1, text: "Biriyani", img: require('../assets/food_types/biryani.png') },
        { id: 2, text: "Burger", img: require('../assets/food_types/burger.png') },
        { id: 3, text: "Chiken", img: require('../assets/food_types/chickencurry.png') },
        { id: 4, text: "Fries", img: require('../assets/food_types/cheesefries.png') },
        { id: 5, text: "soup", img: require('../assets/food_types/soup.png') },

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
                            <CircularCard

                                foodtype={i}
                                key={i.id} text={i.item} />
                        );
                    })
                }
            </ScrollView>

        </View>
    );
};

export default FoodTypesScrollView;


