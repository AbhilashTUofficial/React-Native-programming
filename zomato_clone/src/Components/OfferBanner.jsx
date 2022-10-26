import { Image } from 'react-native';
import React from 'react';


const OfferBanner = (props) => {
    return (

        <Image
            {...props}
            style={{
                height: 96,
                width: "94%",
                alignSelf: "center",
                backgroundColor: "#F1F3FF",
                borderRadius: 8,
                marginHorizontal: 12,
                marginVertical: 6,
            }}>

        </Image>

    );
};

export default OfferBanner;


