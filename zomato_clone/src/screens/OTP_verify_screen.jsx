import { Dimensions, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import { dark, darkGrey, grey, lightGrey, primary, secondary } from '../constants';
import Divider from 'react-native-divider';

const OTPVerifyScreen = (props) => {
    i = 0;
    otp = ["", "", "", "", "", ""];
    return (
        <Background>

            <View style={{
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height,
                paddingVertical: 100,
                alignItems: "center"
            }}>

                <View>
                    <Text
                        style={{
                            color: secondary,
                            fontSize: 14,
                            alignSelf: "center",
                            textAlign: "center",
                            fontWeight: "500"
                        }}
                    >We have sent a verification code to
                    </Text>
                    <Text
                        style={{
                            color: secondary,
                            fontSize: 14,
                            alignSelf: "center",
                            textAlign: "center",
                            fontWeight: "bold"

                        }}
                    >+91 8921350228
                    </Text>
                </View>
                <View
                    style={{
                        alignItems: "center",
                        flexDirection: "row",
                        width: "96%",
                        justifyContent: "space-evenly",
                        marginVertical: 36,
                    }}>
                    {
                        otp.map((n) => {
                            i++;
                            return (

                                <View
                                    key={i}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 6,
                                        backgroundColor: "white",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderColor: lightGrey,
                                        borderWidth: 1

                                    }}>
                                    <TextInput
                                        autoFocus={false}
                                        maxLength={1}
                                        keyboardType={"number-pad"}
                                        style={{

                                            fontSize: 18,
                                            fontWeight: "600",
                                            color: dark,
                                            textAlign: 'center',
                                        }}
                                    >{n}</TextInput>
                                </View>
                            );

                        })}
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: "center"
                    }}>
                    <CustomBtn label={"Resend SMS"} />
                    <CustomBtn label={"Call me"} />

                </View>

                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginVertical: 20,
                    }}>
                    <Text
                        style={{
                            color: primary,
                            fontWeight: '500',
                        }}>
                        Try other login methods
                    </Text>

                </View>
                <InvisibleBtn onPress={() => props.navigation.navigate("tabcontroller")} />

            </View>


            <PreviousScreen
                source={require('../assets/icons/goback.png')}
                onPress={() => props.navigation.goBack()} />



        </Background>
    );
};

export default OTPVerifyScreen;


const PreviousScreen = (props) => {
    return (

        <View style={{
            position: "absolute",
            top: 26,
            left: 12,
            width: 160,
            height: 36,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",


        }}>
            <TouchableOpacity
                // onPress={}
                style={{
                    width: 36,
                    height: 36,
                    justifyContent: "center"
                }}
                {...props}
            >
                <ImageBackground
                    {...props}
                    style={{

                        height: '90%',
                        width: "90%",
                        alignSelf: "center",
                    }} />

            </TouchableOpacity>
            <Text
                style={{
                    textAlignVertical: 'center',
                    fontSize: 18,
                    fontWeight: "500",
                    letterSpacing: 1,
                    color: secondary

                }}
            >
                OTP Verification
            </Text>
        </View>



    );
};

const CustomBtn = ({ label }) => {
    return (
        <TouchableOpacity
            style={{
                margin: 6,
                width: "40%",
                height: 46,
                borderColor: primary,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",


            }}>
            <Text
                style={{
                    color: primary,
                    fontWeight: "500",
                    letterSpacing: 0.6,
                }}
            >{label}</Text>

        </TouchableOpacity>
    );
};

const InvisibleBtn = (props) => {
    return (
        <TouchableOpacity
            // onPress={}
            style={{
                width: 36,
                height: 36,
                justifyContent: "center",
            }}
            {...props}
        >


        </TouchableOpacity>
    );
};