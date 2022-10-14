import { Dimensions, RefreshControl, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import Background from '../Components/Background';
import Header from '../Components/Header';
import StickyHeader from '../Components/StickyHeader';
import OfferBanner from '../Components/OfferBanner';
import Heading from '../Components/Heading';
import FoodTypesScrollView from '../Components/FoodTypesScrollView';
import Recommended from '../Components/RecommendedScrollView';
import BiryaniScrollView from '../Components/BiryaniScrollView';
import RestaurantsScrollView from '../Components/RestaurantsScrollView';
import SafeArea from '../Components/SafeArea';

const DeliveryScreen = (props) => {

    components = [
        <Header />,
        <StickyHeader />,
        <OfferBanner />,
        <Heading label={"Check this out!"} />,
        <OfferBanner />,
        <Heading label={"Eat what makes you happy"} />,
        <FoodTypesScrollView />,
        <Heading label={"Recommended for you"} />,
        <Recommended />,
        <Heading label={"Delicious biryani"} />,
        <BiryaniScrollView />,
        <Heading label={"All restaurants around you"} />,
        <RestaurantsScrollView />,
        <SafeArea />

    ];

    const [refreshing, setRefreshing] = useState(false);

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
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing} />
                        }>

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

export default DeliveryScreen;
