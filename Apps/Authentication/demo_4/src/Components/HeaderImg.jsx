import { ImageBackground, View } from 'react-native';
import React from 'react';

const HeaderImg = (props) => {
    return (
        <View style={{
            width: "100%", height: "100%",
            alignSelf: "center",
            alignItems: "center",
        }}>
            <ImageBackground
                {...props}
                style={{
                    height: '100%',
                    width: "100%"
                }} />
        </View>
    );
};

export default HeaderImg;
