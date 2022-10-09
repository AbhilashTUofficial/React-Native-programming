import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import Header from '../Components/Header';
import InputField from '../Components/InputField';
import CustomBtn from '../Components/CustomBtn';
import { dark, grey, primary } from '../constants';
import Divider from 'react-native-divider';
import GoogleBtn from '../Components/GoogleBtn';

const LogInScreen = (props) => {
    return (
        <Background>

            <View style={{ width: "64%", height: "42%", marginHorizontal: 46 }}>
                <ImageBackground
                    source={require('../assets/img/img_1.png')}
                    style={{ height: '100%', width: "100%" }}
                />
            </View>
            <Header title={"Login"} />
            <InputField placeholder={"Email ID"} />
            <InputField placeholder={"Password"} />

            <TouchableOpacity
                style={{ alignItems: "flex-end", width: "80%", marginTop: 16 }}>
                <Text
                    style={{
                        color: primary,
                        fontSize: 16
                    }}>
                    Forgot Password?</Text>
            </TouchableOpacity>
            <CustomBtn label={"Log in"} />


            <View
                style={{
                    alignItems: "center",
                    width: "80%",
                    marginVertical: 8
                }}>
                <Divider
                    borderColor={grey}
                    color={grey}
                    orientation="center">
                    <Text style={{ color: dark }} >OR</Text>
                </Divider>
            </View>
            <GoogleBtn />


            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    width: "80%",
                    height: "8%"
                }}>
                <Text>New to Logistics? </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
                    <Text style={{ color: primary }}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
};

export default LogInScreen;