import { Dimensions, Text, View } from 'react-native';
import React from 'react';
import { dark, grey } from '../constants';


const Header = ({ title, subtitle, children }) => {
    return (
        <View
            style={{
                width: Dimensions.get("window").width,
                height: 160,
                alignItems: "flex-start",
                justifyContent: "center",


            }}>
            <Text style={{
                color: dark,
                fontSize: 32,
                fontWeight: "500",
                letterSpacing: 1,
                marginVertical: 16
            }}>
                {title}</Text>
            <Text style={{
                color: grey,
                fontSize: 16,
                fontWeight: "500",
                letterSpacing: 1,
                width: Dimensions.get('window').width / 1.2
            }}>
                {subtitle}</Text>
            <View style={{ position: 'absolute' }}>{children}</View>
        </View>
    );


};

export default Header;