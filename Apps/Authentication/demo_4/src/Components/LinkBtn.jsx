import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { primary } from '../constants';


export default function LinkBtn({ text1, text2, btnHandler }) {
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignSelf: "center",
                width: "80%",
            }}>
            <Text>{text1}</Text>
            <TouchableOpacity
                onPress={btnHandler}>
                <Text style={{ color: primary }}>
                    {text2}
                </Text>
            </TouchableOpacity>
        </View>
    );
}