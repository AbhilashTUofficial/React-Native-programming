import { Image, StyleSheet, View } from 'react-native';
import Header from '../Components/Header';
import UserEntry from '../Components/UserEntry';



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
