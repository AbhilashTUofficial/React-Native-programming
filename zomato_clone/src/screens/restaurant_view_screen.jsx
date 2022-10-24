import { Animated, Dimensions, Image, RefreshControl, ScrollView, StatusBar, Text, TouchableHighlightBase, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Background from '../Components/Background';
import { darkGrey, lightGrey, primary, secondary } from '../constants';
import RestaurantDetails from '../Components/RestaurantDetails';
import Header from '../Components/RestaurantHeader';
import VegNonVeg from '../Components/VegNonVegTag';
import CatergoryExpandable from '../Components/CategoryExpandable';
import { useRoute } from '@react-navigation/native';

function RestaurantViewScreen({ navigation }) {
    const route = useRoute();
    components = [

    ];

    state = {
        headerColor: "white"
    };

    const resturantDetails = {
        id: route.params.id,
        storeName: route.params.storeName,
        foodTypes: route.params.items,
        travelTime: route.params.travelTime,
        ratting: route.params.ratting,
        location: route.params.location,
    };
    const categories = route.params.categories;

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

                        <Header goBackHandler={() => navigation.goBack()} />
                        <RestaurantDetails restaurant={resturantDetails} />
                        <VegNonVeg />
                        <CatergoryExpandable categories={categories} />
                        <HealthGuide />

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

