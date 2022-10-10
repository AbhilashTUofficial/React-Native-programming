import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { secondary } from '../constants';

export default function GoogleBtn({ btnHandler }) {
    return (
        <TouchableOpacity
            style={{
                alignItems: "center",
                alignSelf: "center",
                width: "80%",
                paddingVertical: 6,
                marginVertical: 18,
                height: 50,
                flexDirection: "row",
                justifyContent: 'flex-start',
                borderRadius: 12,
                backgroundColor: "#F1F5F6",
            }}
            onPress={btnHandler}>
            <View
                style={{
                    width: 28,
                    height: 28,
                    marginHorizontal: 46
                }}>
                <ImageBackground
                    source={require('../assets/img/google_logo.png')}
                    style={{
                        height: '100%',
                        width: "100%"
                    }}
                />
            </View>
            <Text
                style={{
                    color: secondary,
                    fontSize: 16
                }}>
                Login with Google</Text>

        </TouchableOpacity >
    );
}