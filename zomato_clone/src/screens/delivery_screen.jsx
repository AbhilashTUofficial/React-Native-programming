import { Dimensions, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import { dark, darkGrey, grey, lightGrey, primary, secondary } from '../constants';
import Divider from 'react-native-divider';

const DeliveryScreen = (props) => {
    return (
        <Background>

            <View style={{
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height,
            }}>

            </View>
            <Text>HOME</Text>

        </Background>
    );
};

export default DeliveryScreen;
