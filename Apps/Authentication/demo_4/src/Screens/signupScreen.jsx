import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import Header from '../Components/Header';
import InputField from '../Components/InputField';
import CustomBtn from '../Components/CustomBtn';
import { primary } from '../constants';
import HeaderImg from '../Components/HeaderImg';
import LinkBtn from '../Components/LinkBtn';

const SignUpScreen = (props) => {
    return (
        <Background>

            <View
                style={{
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height,
                    justifyContent: "space-between",
                }}>
                <View
                    style={{
                        flex: 1,
                    }} />
                <View
                    style={{
                        flex: 4,
                    }}>
                    <HeaderImg
                        source={require('../assets/img/img_2.jpg')} />

                </View>
                <View
                    style={{
                        flex: 12,
                    }}>

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

                </View>

            </View>

        </Background>
    );
};

export default SignUpScreen;