import { Image, ImageBackground, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { Component, useState } from 'react';
import { secondary } from '../constants';
import CircularCard from './CircularCard';
import { foodTypes } from '../model/FoodTypesList';


const FoodTypesScrollView = () => {

    const [items, setItems] = useState(foodTypes);

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


