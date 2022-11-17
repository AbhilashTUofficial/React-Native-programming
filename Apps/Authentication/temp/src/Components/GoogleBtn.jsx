import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { dark, dim, primary, secondary } from '../constants';


export default function GoogleBtn({ btnHandler, props }) {
    return (
        <TouchableOpacity
            style={{
                paddingVertical: 6,
                marginVertical: 24,
                height: 50,
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: 'flex-start',
                borderRadius: 12,
                backgroundColor: "#F1F5F6",
            }}
            onPress={btnHandler}
        >
            <View style={{ width: 28, height: 28, marginHorizontal: 46 }}>
                <ImageBackground
                    source={require('../assets/img/google_logo.png')}
                    style={{ height: '100%', width: "100%" }}
                />
            </View>
            <Text style={{ color: secondary, fontSize: 16 }}>Login with Google</Text>

        </TouchableOpacity >
    );
}