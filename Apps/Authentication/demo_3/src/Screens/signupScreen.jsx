import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import Header from '../Components/Header';
import InputField from '../Components/InputField';
import CustomBtn from '../Components/CustomBtn';
import { grey, primary } from '../constants';
import Divider from 'react-native-divider';
import CustomIconBtns from '../Components/CustomIconBtns';

const SignUpScreen = (props) => {
    return (
        <Background>
            <Header title={"Create Account"}
                subtitle={"Start your career with us"} />
            <InputField placeholder={"Full name"} />
            <InputField placeholder={"Email"} />
            <InputField placeholder={"Password"} />
            <CustomBtn label={"Sign Up"} />

            <View style={{
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
                    height: "10%",
                    flexWrap: "wrap"


                }}>
                <Text>By signing up you accept the </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
                    <Text style={{ color: primary }}>
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

            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    width: "80%",
                    height: "9%"

                }}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
                    <Text style={{ color: primary }}>
                        Log In
                    </Text>
                </TouchableOpacity>

            </View>

        </Background>
    );
};

export default SignUpScreen;