import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { dark, dim, primary, secondary } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';



export default function GoBackBtn({ btnHandler, props }) {
    return (
        <TouchableOpacity style={{
            position: "absolute",
            top: 30,
            left: 30,
            width: 36,
            height: 36,
            alignItems: "center",
            justifyContent: "center",
        }}
            onPress={() => props.navigation.goBack()}

        >
            <Icon
                name="chevron-left"
                size={18}
                color={primary}
            ></Icon>


        </TouchableOpacity>
    );
}