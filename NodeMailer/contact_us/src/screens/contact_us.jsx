import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../Components/Header';
import InputField from '../Components/InputField';
import UserEntry from '../Components/UserEntry';
import { primary } from '../constants';



const ContactUs = () => {

    const image = require("../assets/images/contactus.jpg");

    return (
        <View style={contactUsStyle.cont}>

            <View style={{ paddingHorizontal: 16 }}>

                <Header title={"Contact Us   "} canGoBack={true} />

                <Image style={contactUsStyle.img} source={image} />

            </View>

            <UserEntry />


        </View>
    );
};

export default ContactUs;


const contactUsStyle = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        paddingVertical: 32,
        height: "100%",
    },
    img: {
        width: 300,
        height: 200,
        alignSelf: "center"
    },

});
