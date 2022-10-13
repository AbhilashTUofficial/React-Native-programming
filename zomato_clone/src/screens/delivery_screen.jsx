import { Dimensions, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Background from '../Components/Background';
import { dark, darkGrey, grey, lightGrey, primary, secondary } from '../constants';
import Divider from 'react-native-divider';
import Header from '../Components/Header';
import StickyHeader from '../Components/StickyHeader';

const DeliveryScreen = (props) => {

    components = [
        <Header />,
        <StickyHeader />,
        <OfferBanner />,
        <CheckThisOut />,
        <EatWhatMakesYouHappy />,
        <Recommended />,
        <AmazingOffers />

    ];

    return (
        <Background>

            <View style={{
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height,
                alignItems: "center"
            }}>
                <View>

                    <ScrollView
                        stickyHeaderIndices={[1]}
                        showsVerticalScrollIndicator={false}
                    >


                        {
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

export default DeliveryScreen;







const OfferBanner = () => {
    return (
        <View
            style={{

                height: 68,
                width: Dimensions.get("screen").width,
                backgroundColor: "pink",
            }}
        ></View>
    );
};

const CheckThisOut = () => {
    return (
        <View
            style={{

                height: 180,
                width: Dimensions.get("screen").width,
                backgroundColor: "red",
            }}
        ></View>
    );
};

const EatWhatMakesYouHappy = () => {
    return (
        <View
            style={{

                height: 180,
                width: Dimensions.get("screen").width,
                backgroundColor: "blue",
            }}
        ></View>
    );
};

const Recommended = () => {
    return (
        <View
            style={{

                height: 200,
                width: Dimensions.get("screen").width,
                backgroundColor: "green",
            }}
        ></View>
    );
};

const AmazingOffers = () => {
    return (
        <View
            style={{

                height: 200,
                width: Dimensions.get("screen").width,
                backgroundColor: "yellow",
            }}
        ></View>
    );
};