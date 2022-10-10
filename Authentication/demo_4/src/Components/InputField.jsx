import React from 'react';
import { ImageBackground, TextInput, View } from 'react-native';
import { grey, dark, dim } from '../constants';

const InputField = (props) => {
    return (
        <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "80%",
            alignSelf: "center",
        }}>

            <View style={{
                width: 28,
                height: 28,
                marginRight: 12,
            }}>
                <ImageBackground
                    {...props}
                    style={{
                        height: '100%',
                        width: "100%",
                        alignSelf: "center",
                        marginVertical: 4,
                    }} />
            </View>

            <TextInput
                placeholderTextColor={grey}
                {...props}

                style={{
                    color: dark,
                    shadowOffset: { height: 1, width: 1 },
                    backgroundColor: '#fff',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginVertical: 8,
                    width: "86%",
                    borderBottomWidth: 1,
                    borderColor: dim

                }} >

            </TextInput >
        </View>

    );
};

export default InputField;