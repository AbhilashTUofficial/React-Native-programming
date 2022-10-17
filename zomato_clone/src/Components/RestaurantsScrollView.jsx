import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { Restaurants } from '../model/ResturantsList';


const RestaurantsScrollView = () => {

    const [stores, setItems] = useState(Restaurants);

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

