
import { ImageBackground, View } from 'react-native';
import React from 'react';



const HeaderImg = (props) => {
    return (
        <View style={{
            // width: "66%", height: "66%",
            width: "60%", height: "36%",
            alignSelf: "center",
            alignItems: "center",
            marginRight: 20,
            marginLeft: 20,
            marginBottom: 6,
            marginTop: 0,


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
