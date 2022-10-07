import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Background from '../Component/background';
import { orange2 } from '../constants';
import InputField from '../Component/inputField';
import CustomBtn from '../Component/customBtn';
import Header from '../Component/header';

const LogInScreen = (props) => {
    return (
        <Background>
            <Header
                height={Dimensions.get('window').height * 0.3}
                heading={"LOG IN"} >
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
                        placeholder="Password"
                        secureTextEntry={true} />

                    <View
                        style={{ alignItems: "flex-end", width: "70%" }}>
                        <Text
                            style={{
                                color: orange2,
                                fontSize: 12
                            }}>
                            Forgot Password?</Text>
                    </View>
                    <View style={{ position: 'absolute', bottom: 120, width: "70%" }}>
                        <CustomBtn label="Log In" textColor={"white"}
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
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
                            <Text style={{ color: orange2 }}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </Header>
        </Background>
    );
};

export default LogInScreen;