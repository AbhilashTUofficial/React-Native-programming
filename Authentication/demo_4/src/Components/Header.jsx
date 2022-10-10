import { Dimensions, Text, View } from 'react-native';
import React from 'react';
import { dark, hMargin, secondary } from '../constants';

const Header = ({ title, subtitle, children }) => {
    return (
        <View
            style={
                subtitle === undefined ? {
                    width: Dimensions.get("window").width,
                    paddingLeft: hMargin,
                    paddingRight: 120,
                    alignItems: "flex-start",
                    justifyContent: "center",
                } : {
                    width: Dimensions.get("window").width,
                    paddingLeft: hMargin,
                    paddingRight: 120,
                    marginTop: 20,
                    marginBottom: 30,
                    alignItems: "flex-start",
                    justifyContent: "center",
                    height: 140,
                }}>
            <Text style={{
                color: secondary,
                fontSize: 36,
                fontWeight: "500",
                letterSpacing: 1,
                fontWeight: "bold",
            }}>
                {title}</Text>

            <Text

                style={
                    subtitle === undefined ? {} : {
                        color: dark,
                        fontSize: 16,
                        letterSpacing: 1,
                        width: Dimensions.get('window').width / 1.2,
                        marginTop: 10
                    }
                }>
                {subtitle}</Text>
            <View style={{ position: 'absolute' }}>{children}</View>
        </View>
    );


};

export default Header;