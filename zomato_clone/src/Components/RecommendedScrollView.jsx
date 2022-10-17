import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import ElongatedCard from './ElongatedCard';
import { RecommendedList } from '../model/RecommendedList';


const Recommended = () => {

    const [items, setItems] = useState(RecommendedList);

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
                    items.map((i) => {
                        return (
                            <ElongatedCard
                                item={i}
                                key={i.id} />

                        );
                    })}
            </ScrollView>

        </View>
    );
};

export default Recommended;

