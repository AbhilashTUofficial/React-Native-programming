import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { primary } from '../constants';


export default function CustomBtn({ label, btnHandler, props }) {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                paddingVertical: 6,
                marginVertical: 24,
                height: 50,
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                backgroundColor: primary,
                elevation: 6,
                shadowColor: primary,
                shadowOffset: { height: 4, width: 4 },
                shadowOpacity: 1,
                shadowRadius: 1,
            }}
            onPress={btnHandler}
        >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: "bold" }}>{label}</Text>

        </TouchableOpacity>
    );
}