import React, { PureComponent } from 'react';
import { TextInput, View } from 'react-native';
import { darkGreenColor } from '../constants';

const InputField = (props) => {
    return (
        <TextInput
            {...props}
            placeholderTextColor={darkGreenColor}
            style={{
                borderRadius: 100,
                color: darkGreenColor,
                paddingHorizontal: 20,
                width: '72%',
                backgroundColor: "#fafafa",
                marginVertical: 20,
            }} >

        </TextInput >
    );
};

export default InputField;