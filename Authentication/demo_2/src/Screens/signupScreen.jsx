import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Background from '../Component/background';
import { orange2 } from '../constants';
import InputField from '../Component/inputField';
import CustomBtn from '../Component/customBtn';
import Header from '../Component/header';

const SignUpScreen = (props) => {
    return (
        <Background>
            <Header height={Dimensions.get('window').height * 0.26} heading={"SIGN UP"}>
                <View
                    style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <InputField
                        placeholder="Username"
                        keyboardType={"text"} />
                    <InputField
                        placeholder="Email"
                        secureTextEntry={true} />
                    <InputField
                        placeholder="Password"
                        keyboardType={"email-address"} />
                    <InputField
                        placeholder="Conform Password"
                        secureTextEntry={true} />


                    <View style={{ position: 'absolute', bottom: 120, width: "70%" }}>
                        <CustomBtn label="Sign Up" textColor={"white"}
                            btnHandler={() => props.navigation.navigate("home")} />

                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 100,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
                            <Text style={{ color: orange2 }}>
                                Log In
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Header>

        </Background>
    );
};

export default SignUpScreen;