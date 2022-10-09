import React from 'react';
import { TouchableOpacity } from 'react-native';
import { primary } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';



export default function GoBackBtn({ btnHandler }) {
    return (
        <TouchableOpacity style={{
            position: "absolute",
            top: 26,
            left: 26,
            width: 36,
            height: 36,
            alignItems: "center",
            justifyContent: "center",
        }}
            onPress={btnHandler}

        >
            <Icon
                name="chevron-left"
                size={24}
                color={primary}
            ></Icon>


        </TouchableOpacity>
    );
}