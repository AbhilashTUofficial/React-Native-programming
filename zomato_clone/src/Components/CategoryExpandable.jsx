import { Animated, Dimensions, Image, RefreshControl, ScrollView, StatusBar, Text, TouchableHighlightBase, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Background from '../Components/Background';
import { darkGrey, lightGrey, primary, secondary } from '../constants';
import RestaurantDetails from '../Components/RestaurantDetails';
import Header from '../Components/RestaurantHeader';
import VegNonVeg from '../Components/VegNonVegTag';

const CatergoryExpandable = () => {
    const Categories = [
        {
            id: "1",
            title: "Recommended",
            items: [
                ["Item name", "price", "item url",],
                ["Item name", "price", "item url",]
            ]
        },
        {
            id: "2",
            title: "Special",
            items: [
                ["Item name", "price", "item url",],
                ["Item name", "price", "item url",]
            ]
        }
    ];
    return (
        <View>
            {
                Categories.map((category) => {
                    return (
                        <ItemView cat={category} />
                    );
                })
            }
        </View>
    );
};

export default CatergoryExpandable;

const ItemView = ({ cat }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white",

            }}>
            <TouchableOpacity
                onPress={() => {
                    setIsExpanded(!isExpanded);
                }}>
                <Text >{cat.title}</Text>
            </TouchableOpacity>
            <ExpandableView expanded={isExpanded} />
        </View>
    );
};


const ExpandableView = ({ expanded = false }) => {
    const [height] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(height, {
            toValue: !expanded ? 200 : 0,
            duration: 150,
            useNativeDriver: false
        }).start();
    }, [expanded, height]);

    // console.log('rerendered');

    return (
        <Animated.View
            style={{
                height,
                backgroundColor: "white"
            }}
        ></Animated.View>
    );
};