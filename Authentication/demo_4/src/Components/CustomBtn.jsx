import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { primary } from '../constants';


export default function CustomBtn({ label, btnHandler }) {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                paddingVertical: 6,
                marginVertical: 18,
                height: 50,
                width: "80%",
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: 12,
                backgroundColor: primary,
            }}
            onPress={btnHandler}
        >
            <Text
                style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: "bold"
                }}>
                {label}</Text>

        </TouchableOpacity>
    );
}