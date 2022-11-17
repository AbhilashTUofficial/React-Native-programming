
import React from 'react';
import { TextInput } from 'react-native';
import { grey, dark } from '../constants';

const InputField = (props) => {
    return (
        <TextInput
            {...props}
            placeholderTextColor={grey}
            style={{
                paddingHorizontal: 20,
                color: dark,
                shadowColor: grey,
                shadowOffset: { height: 1, width: 1 },
                shadowOpacity: 1,
                shadowRadius: 1,
                borderRadius: 6,
                backgroundColor: '#fff',
                elevation: 6,
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                marginVertical: 8,
                width: "80%",

            }} >
        </TextInput >

    );
};

export default InputField;