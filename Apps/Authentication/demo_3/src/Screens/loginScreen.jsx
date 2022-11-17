import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import Header from '../Components/Header';
import InputField from '../Components/InputField';
import CustomBtn from '../Components/CustomBtn';
import { grey, primary } from '../constants';
import Divider from 'react-native-divider';
import CustomIconBtns from '../Components/CustomIconBtns';

const LogInScreen = (props) => {
    return (
        <Background>
            <Header title={"Welcome Back"}
                subtitle={"Sign in to your account"} />
            <InputField placeholder={"Email"} />
            <InputField placeholder={"Password"} />
            <CustomBtn label={"Log Un"} />
            <TouchableOpacity
                style={{
                    alignItems: "center",
                    width: "80%"
                }}
                onPress={() => props.navigation.navigate("forgotpassword")}>
                <Text style={{ color: primary }}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>

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
                    <Text>or</Text>
                </Divider>
            </View>
            <CustomIconBtns />


            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    width: "80%",
                    height: "30%"

                }}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
                    <Text style={{ color: primary }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

            </View>

        </Background>
    );
};

export default LogInScreen;