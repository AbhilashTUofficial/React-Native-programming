import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import ElongatedCard from './ElongatedCard';
import { BiriyaniList } from '../model/BiryaniList';


const BiryaniScrollView = () => {

    const [items, setItems] = useState(BiriyaniList);

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
                        // const image = require(i.img);
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

export default BiryaniScrollView;

