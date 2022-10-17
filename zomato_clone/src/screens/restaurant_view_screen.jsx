import { Dimensions, Image, RefreshControl, ScrollView, StatusBar, Text, TouchableHighlightBase, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Background from '../Components/Background';
import { darkGrey, lightGrey, secondary } from '../constants';
import RestaurantDetails from '../Components/RestaurantDetails';
import Header from '../Components/RestaurantHeader';


const RestaurantViewScreen = (props) => {
    components = [
        <Header />,
        <RestaurantDetails />,
        <VegNonVeg />,
        <ItemView />,
    ];

    state = {
        headerColor: "white"
    };

    listenScrollEvent = e => {
        if (window.scrollY > 40) {
            this.setState({ headerColor: 'black' });
        } else {
            this.setState({ headerColor: 'white' });
        }
    };
    const func = () => {
        console.log("hi");
    };

    useEffect(() => {
        // window.addEventListener('click', func);

    });

    return (
        <Background>
            <StatusBar translucent backgroundColor="transparent" />

            <View style={{
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height,
                alignItems: "center",
                flexDirection: 'row'
            }}>
                <View
                    style={{
                        width: "100%"
                    }}>
                    <ScrollView
                        stickyHeaderIndices={[0]}
                        showsVerticalScrollIndicator={false}>
                        {
                            //TODO: Convert this to a flatlist
                            components.map((component) => {
                                return (
                                    <View key={""}>
                                        {component}
                                    </View>
                                );
                            })
                        }
                    </ScrollView>

                </View>

            </View>

        </Background>
    );
};

export default RestaurantViewScreen;




const VegNonVeg = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#F6F5FA",
                width: Dimensions.get('window').width,
                height: 60

            }}


        ></View>
    );
};

const ItemView = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white",
                height: 6000

            }}

        ></View>
    );
};