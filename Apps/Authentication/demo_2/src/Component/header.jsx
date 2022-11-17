import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';


const Header = ({ height, heading, children }) => {
    return (
        <View>
            <LinearGradient
                colors={["#F05F00", "#F18900"]}
                style={{
                    height: height,
                    width: Dimensions.get('window').width,
                    borderBottomLeftRadius: 120,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Text style={{ color: "white", fontSize: 36, fontWeight: "bold" }}>{heading}</Text>

            </LinearGradient>
            <View style={{ position: 'absolute' }}>{children}</View>
        </View>
    );


};

export default Header;
