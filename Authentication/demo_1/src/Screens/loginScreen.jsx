import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Background from '../Component/background';
import { darkGreenColor } from '../constants';
import InputField from '../Component/inputField';
import CustomBtn from '../Component/customBtn';

const LogInScreen = (props) => {
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
                    LOG IN
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
                        Welcome back</Text>
                    <InputField
                        placeholder="Email / Username"
                        keyboardType={"email-address"} />
                    <InputField
                        placeholder="Password"
                        secureTextEntry={true} />

                    <View
                        style={{ alignItems: "flex-end", width: "64%" }}>
                        <Text
                            style={{
                                color: darkGreenColor,
                                fontWeight: "bold", fontSize: 12
                            }}>
                            Forgot Password?</Text>
                    </View>
                    <View
                        style={{
                            position: "absolute",
                            bottom: 120
                        }}>
                        <CustomBtn
                            label={"Log In"}
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
                            <Text>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
                                <Text style={{ color: darkGreenColor }}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
            </View>
        </Background>
    );
};

export default LogInScreen;