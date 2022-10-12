import { View } from 'react-native';
import React from 'react';

const Background = ({ children }) => {
    return (
        <View>
            <View
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    width: "100%",
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