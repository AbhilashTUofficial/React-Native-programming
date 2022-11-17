
import React from 'react';
import { TextInput, View } from 'react-native';
import { grey, dark, light, dim } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
const InputField = (props) => {
    return (
        <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        }}>
            <Icon
                name="chevron-left"
                size={18}
                color={dark}
                style={{
                    margin: 12
                }}
            ></Icon>
            <TextInput
                {...props}
                placeholderTextColor={grey}
                style={{
                    color: dark,
                    shadowOffset: { height: 1, width: 1 },
                    backgroundColor: '#fff',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginVertical: 8,
                    width: "72%",
                    borderBottomWidth: 1,
                    borderColor: dim

                }} >
            </TextInput >
        </View>


    );
};

export default InputField;