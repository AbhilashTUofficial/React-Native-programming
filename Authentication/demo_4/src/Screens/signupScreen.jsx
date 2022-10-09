import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import Header from '../Components/Header';
import InputField from '../Components/InputField';
import CustomBtn from '../Components/CustomBtn';
import { primary } from '../constants';
import GoBackBtn from '../Components/GoBackBtn';
import HeaderImg from '../Components/HeaderImg';
import LinkBtn from '../Components/LinkBtn';

const SignUpScreen = (props) => {
    return (
        <Background>
            <HeaderImg
                source={require('../assets/img/img_2.jpg')} />

            <Header
                title={"Sign up"} />

            <InputField
                placeholder={"Email ID"}
                source={require('../assets/icons/a_email.png')} />

            <InputField placeholder={"Full name"}
                source={require('../assets/icons/person.png')} />

            <InputField
                placeholder={"Mobile"}
                source={require('../assets/icons/phone.png')} />

            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    width: "80%",
                    alignSelf: "center",
                    height: 40,
                    flexWrap: "wrap",
                    marginVertical: 18,
                }}>
                <Text>By signing up you accept the </Text>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("signup")}>
                    <Text
                        style={{ color: primary }}>
                        Terms of Service
                    </Text>
                </TouchableOpacity>
                <Text> and </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
                    <Text style={{ color: primary }}>
                        Privacy Policy
                    </Text>
                </TouchableOpacity>
            </View>

            <CustomBtn
                label={"Continue"} />

            <LinkBtn
                text1={"Joined us before? "}
                text2={"Login"}
                btnHandler={() => props.navigation.navigate("login")} />

        </Background>
    );
};

export default SignUpScreen;