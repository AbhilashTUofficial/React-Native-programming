import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import ElongatedCard from './ElongatedCard';
import { Restaurants } from '../model/ResturantsList';


const HorizontalScrollView = (props) => {

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
                        if (props.list.includes(i.id)) {
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

export default HorizontalScrollView;

