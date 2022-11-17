import { Dimensions, View } from 'react-native';
import React from 'react';

const Background = ({ children }) => {
    return (
        <View>
            <View
                style={{
                    backgroundColor: "white",
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                }}>
            </View>
            <View
                style={{
                    position: 'absolute',
                }}>{children}</View>
        </View>
    );
};

export default Background;
