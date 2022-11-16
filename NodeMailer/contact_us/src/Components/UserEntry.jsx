import { Image, StyleSheet, Text, TextInput, View, Linking } from 'react-native';
import { primary } from '../constants';
import CustomBtn from './CustomBtn';
import { connect } from 'react-redux';
import { submitData } from '../redux/UploadData/uploadData-actions';
import { useState } from 'react';
import { response } from 'express';
import linkEmailApp from '../mailer/linkmailer';

const UserEntry = ({ submitData }) => {

    const personIcon = require("../assets/icons/person_icon.png");
    const phoneIcon = require("../assets/icons/phone_icon.png");
    const emailIcon = require("../assets/icons/email_icon.png");

    const [name, setName] = useState("");
    const [ph, setPh] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const [backendData, setBackendData] = useState([{}]);

    const fetchApi = () => {
        fetch("/api")
            .then((response) => response.json())
            .then((data) => {
                setBackendData(data);
            }).catch(function (error) {
                console.log("Error while fetchin Api");
                throw error;
            });
    };



    const submitHandler = () => {
        submitData(name, ph, email, message);
    };

    return (

        <View style={userEntryStyles.body}>

            <Text style={userEntryStyles.title}>
                Sent us your informations</Text>

            <View style={userEntryStyles.field}>

                <Text style={userEntryStyles.subTitle}>Name</Text>
                <View style={userEntryStyles.cont}>
                    <TextInput placeholder='Name'
                        style={{ width: "90%" }}
                        placeholderTextColor={"grey"}
                        onChangeText={(text) => setName(text)} />
                    <Image style={userEntryStyles.icon}
                        source={personIcon} />
                </View>

                <Text style={userEntryStyles.subTitle}>Mobile Number</Text>
                <View style={userEntryStyles.cont}>
                    <TextInput placeholder='Mobile Number'
                        style={{ width: "90%" }}
                        keyboardType='number-pad'
                        placeholderTextColor={"grey"}
                        onChangeText={(text) => setPh(text)} />
                    <Image style={userEntryStyles.icon}
                        source={phoneIcon} />
                </View>

                <Text style={userEntryStyles.subTitle}>Email</Text>
                <View style={userEntryStyles.cont}>
                    <TextInput placeholder='Email'
                        style={{ width: "90%" }}
                        keyboardType='email-address'
                        placeholderTextColor={"grey"}
                        onChangeText={(text) => setEmail(text)} />
                    <Image style={userEntryStyles.icon}
                        source={emailIcon} />
                </View>

                <Text style={userEntryStyles.subTitle}>Message</Text>
                <View style={userEntryStyles.cont}>
                    <TextInput
                        multiline
                        style={{ width: "90%" }}
                        numberOfLines={4}
                        keyboardType='email-address'
                        placeholderTextColor={"grey"}
                        onChangeText={(text) => setMessage(text)} />

                </View>


                <View style={userEntryStyles.btnCont}>
                    <CustomBtn text={"Submit"} handler={submitHandler} />
                </View>
            </View>

        </View>

    );
};

const mapDispatchToProps = dispatch => {
    return {
        submitData: (name, ph, email, message) => dispatch(submitData(name, ph, email, message)),
    };
};

export default connect(null, mapDispatchToProps)(UserEntry);


const userEntryStyles = StyleSheet.create({
    body: {
        backgroundColor: "white",
        width: "100%",
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        borderTopRightRadius: 36,
        borderTopLeftRadius: 36,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    cont: {
        backgroundColor: "white",
        borderColor: primary,
        borderWidth: 0.8,
        borderRadius: 6,
        paddingHorizontal: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    subTitle: {
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 8,
    },
    field: {
        width: "100%",
        paddingHorizontal: 16,
        marginVertical: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: primary,
        marginTop: 16,
    },
    icon: {
        width: 24,
        height: 24,
    },
    btnCont: {
        marginTop: 16,
        marginLeft: "auto"
    }
});