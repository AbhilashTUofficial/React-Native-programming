import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Background from '../Component/background';
import { darkGreenColor } from '../constants';
import InputField from '../Component/inputField';
import CustomBtn from '../Component/customBtn';

const SignUpScreen = (props) => {
    return (
        <Background>
            <View
                style={{
                    width: Dimensions.get('window').width,
                    alignItems: "center",
                    marginTop: 64
                }}>
                <Text
                    style={{
                        color: "white",
                        fontSize: 36,
                        fontWeight: "bold",
                        marginVertical: 10
                    }}>
                    SIGN UP
                </Text>
                <View
                    style={{
                        backgroundColor: "white",
                        width: "100%",
                        height: Dimensions.get('window').height * 0.9,
                        borderTopLeftRadius: 130,
                        paddingTop: 100,
                        alignItems: 'center'
                    }}>
                    <Text
                        style={{
                            fontSize: 36,
                            color: darkGreenColor,
                            fontWeight: 'bold'
                        }}>
                        Welcome</Text>
                    <InputField
                        placeholder="Email"
                        keyboardType={"email-address"} />
                    <InputField
                        placeholder="Username"
                        keyboardType={"username"} />
                    <InputField
                        placeholder="Password"
                        secureTextEntry={true} />
                    <InputField
                        placeholder="Conform password"
                        secureTextEntry={true} />


                    <View
                        style={{
                            position: "absolute",
                            bottom: 120
                        }}>
                        <CustomBtn
                            label={"Sign Up"}
                            bgColor={darkGreenColor}
                            textColor={"white"}
                            btnHandler={() => props.navigation.navigate("home")}
                        />
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center"
                            }}>
                            <Text>Already have an account? </Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
                                <Text style={{ color: darkGreenColor }}>
                                    Log In
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
            </View>
        </Background>
    );
};

export default SignUpScreen;