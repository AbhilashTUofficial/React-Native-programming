import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import ElongatedCard from './ElongatedCard';
import { BiryaniList, Restaurants } from '../model/ResturantsList';


const BiryaniScrollView = () => {

    const [restaurants, setItems] = useState(Restaurants);

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
                    restaurants.map((i) => {
                        if (BiryaniList.includes(i.id)) {
                            return (
                                <ElongatedCard
                                    restaurant={i}
                                    key={i.id} />
                            );
                        }

                    })}
            </ScrollView>

        </View>
    );
};

export default BiryaniScrollView;

