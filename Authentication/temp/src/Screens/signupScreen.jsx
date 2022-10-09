import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import Header from '../Components/Header';
import InputField from '../Components/InputField';
import CustomBtn from '../Components/CustomBtn';
import { dark, dim, grey, primary } from '../constants';
import Divider from 'react-native-divider';
import GoogleBtn from '../Components/GoogleBtn';
import GoBackBtn from '../Components/GoBackBtn';

const SignUpScreen = (props) => {
    return (
        <Background>
            <GoBackBtn />
            <View style={{ width: "64%", height: "66%", marginHorizontal: 46 }}>
                <ImageBackground
                    source={require('../assets/img/img_2.png')}
                    style={{ height: '100%', width: "100%" }}
                />
            </View>
            <Header title={"Sign up"} />
            <InputField placeholder={"Email ID"} />
            <InputField placeholder={"Full name"} />
            <InputField placeholder={"Mobile"} />

            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    width: "80%",
                    height: "10%",
                    flexWrap: "wrap",
                    marginTop: 16,


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

            <CustomBtn label={"Continue"} />




            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    width: "80%",
                    height: "8%"

                }}>
                <Text>Joined us before? </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
                    <Text style={{ color: primary }}>
                        Login
                    </Text>
                </TouchableOpacity>

            </View>

        </Background>
    );
};

export default SignUpScreen;