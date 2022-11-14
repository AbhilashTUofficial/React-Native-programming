import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { primary } from '../constants';


const CustomBtn = ({ text, handler }) => {

    return (
        <TouchableOpacity
            onPress={handler}
            activeOpacity={0.9}
            style={ContactUsBtnStyle.btn}>
            <Text style={ContactUsBtnStyle.text}>{text}</Text>
        </TouchableOpacity>);
};

export default CustomBtn;

const ContactUsBtnStyle = StyleSheet.create({
    btn: {
        backgroundColor: primary,
        height: 36,
        alignSelf: "center",
        borderRadius: 6,
        elevation: 3,
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    text: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    }
});
