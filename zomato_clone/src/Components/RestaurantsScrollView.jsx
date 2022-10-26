import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { Restaurants } from '../model/ResturantsList';


const RestaurantsScrollView = () => {

    const [restaurants, setItems] = useState(Restaurants);

    return (

        <View style={{ paddingVertical: 6 }}>

            <ScrollView showsHorizontalScrollIndicator={false}>

                {
                    restaurants.map((i) => {

                        return (
                            <RestaurantCard
                                restaurant={i}
                                key={i.id} />
                        );
                    })
                }

            </ScrollView>

        </View>
    );
};

export default RestaurantsScrollView;

