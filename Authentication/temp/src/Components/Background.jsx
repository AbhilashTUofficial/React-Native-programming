
import { Dimensions, View } from 'react-native';
import React from 'react';
import { lightBlue, lightGreen } from '../constants';
import LinearGradient from 'react-native-linear-gradient';


const Background = ({ children }) => {
    return (
        <View>
            <View
                style={{
                    backgroundColor: "white",
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                    alignItems: "center",
                    justifyContent: "center",
                }}>

            </View>
            <View style={{
                position: 'absolute',
                alignItems: "center"


            }}>{children}</View>
        </View>
    );
};

export default Background;
