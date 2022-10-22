import { Animated, Dimensions, Image, RefreshControl, ScrollView, StatusBar, Text, TouchableHighlightBase, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Background from '../Components/Background';
import { darkGrey, lightGrey, primary, secondary } from '../constants';
import RestaurantDetails from '../Components/RestaurantDetails';
import Header from '../Components/RestaurantHeader';
import VegNonVeg from '../Components/VegNonVegTag';
import CatergoryExpandable from '../Components/CategoryExpandable';

const RestaurantViewScreen = (props) => {
    components = [
        <Header goBackHandler={() => props.navigation.goBack()} />,
        <RestaurantDetails />,
        <VegNonVeg />,
        <CatergoryExpandable />,
        <HealthGuide />
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








const HealthGuide = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#F6F5FA",
                height: 400,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    paddingHorizontal: 12,
                    marginTop: 24
                }}>
                <Text style={{
                    fontSize: 28
                }}>• </Text>
                <Text
                    style={{
                        fontSize: 12,
                    }}>Menu items, nutritional information and prices are set directly by the restaurant.</Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    paddingHorizontal: 12,
                    marginTop: 24

                }}>
                <Text style={{
                    fontSize: 28
                }}>• </Text>
                <Text
                    style={{
                        fontSize: 12,
                    }}>Nutritional information values displayed are indicative, per serving and may vary depending on the ingreding on the ingredients, portion size and customizations.</Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    paddingHorizontal: 12,
                    marginTop: 24

                }}>
                <Text style={{
                    fontSize: 28
                }}>• </Text>
                <Text
                    style={{
                        fontSize: 12,
                    }}>An average active adult requires 2,00 kcal energy per day, however, calorie needs may vary.</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 12,
                            color: primary,
                            paddingHorizontal: 12,
                            marginTop: 24
                        }}>Report an issue with the menu</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

