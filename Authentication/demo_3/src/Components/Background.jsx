
import { Dimensions, View } from 'react-native';
import React from 'react';
import { lightBlue, lightGreen } from '../constants';
import LinearGradient from 'react-native-linear-gradient';


const Background = ({ children }) => {
    return (
        <View>
            <LinearGradient
                colors={[lightGreen, lightBlue]}
                style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                    alignItems: "center",
                    justifyContent: "center",
                }}>

            </LinearGradient>
            <View style={{
                position: 'absolute',
                padding: 32,


            }}>{children}</View>
        </View>
    );
};

export default Background;
