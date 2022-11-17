import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import Header from '../Components/Header';
import InputField from '../Components/InputField';
import CustomBtn from '../Components/CustomBtn';
import { dark, grey, primary } from '../constants';
import Divider from 'react-native-divider';
import GoogleBtn from '../Components/GoogleBtn';
import HeaderImg from '../Components/HeaderImg';
import LinkBtn from '../Components/LinkBtn';
const LogInScreen = (props) => {
    return (
        <Background>

            <View
                style={{
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height,
                    justifyContent: "space-evenly",
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
                        source={require('../assets/img/img_1.jpg')}
                    />
                </View>
                <View
                    style={{
                        flex: 12,
                    }}>

                    <Header
                        title={"Login"} />
                    <InputField
                        placeholder={"Email ID"}

                        source={require('../assets/icons/a_email.png')}
                    />
                    <InputField
                        placeholder={"Password"}
                        source={require('../assets/icons/lock.png')}
                        secureTextEntry={true}

                    />

                    <TouchableOpacity
                        style={{
                            alignItems: "flex-end",
                            alignSelf: "center",
                            width: "80%",
                            marginTop: 16
                        }}
                        onPress={() => props.navigation.navigate("forgotpassword")}>
                        <Text
                            style={{
                                color: primary,
                                fontSize: 16
                            }}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                    <CustomBtn
                        label={"Log in"} />


                    <View
                        style={{
                            alignItems: "center",
                            alignSelf: "center",
                            width: "80%",
                        }}>
                        <Divider
                            borderColor={grey}
                            color={grey}
                            orientation="center">
                            <Text
                                style={{ color: dark }} >OR
                            </Text>
                        </Divider>
                    </View>
                    <GoogleBtn />
                    <LinkBtn
                        text1={"New to Logistics? "}
                        text2={"Register"}
                        btnHandler={() => props.navigation.navigate("signup")} />
                </View>

            </View>

        </Background>
    );
};

export default LogInScreen;