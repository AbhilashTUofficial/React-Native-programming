import React, { PureComponent } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { gray, orange2 } from '../constants';

const InputField = (props) => {
    return (
        <TouchableOpacity style={{
            shadowColor: gray,
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
            borderRadius: 30,
            backgroundColor: '#fff',
            elevation: 6,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginVertical: 20,
        }}>
            <TextInput
                {...props}
                placeholderTextColor={gray}
                style={{
                    paddingHorizontal: 20,
                    color: orange2,
                    width: '76%',
                }} >

            </TextInput >
        </TouchableOpacity>

    );
};

export default InputField;