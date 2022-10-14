import { Dimensions, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import { dark, darkGrey, grey, lightGrey, primary, secondary } from '../constants';
import Divider from 'react-native-divider';

const AuthScreen = (props) => {
    return (
        <Background>

            <View style={{
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height,
            }}>
                <HeaderImg />
                <View
                    style={{
                        flex: 3,
                        justifyContent: "space-between",
                        paddingVertical: 20,
                        paddingHorizontal: 36,
                    }}>
                    <Title />

                    <Divider
                        borderColor={lightGrey}
                        color={darkGrey}
                        orientation="center">
                        <Text
                            style={{
                                color: dark,
                                fontSize: 12,
                            }} >Log in or sign up
                        </Text>
                    </Divider>
                    <View
                        style={{
                            justifyContent: "center",

                        }}>
                        <PhInputField />

                        <ContinueBtn onPress={() => props.navigation.navigate("otpverification")} />

                    </View>

                    <Divider
                        borderColor={lightGrey}
                        color={darkGrey}
                        orientation="center">
                        <Text
                            style={{
                                color: dark,
                                fontSize: 12,
                            }} >or
                        </Text>
                    </Divider>

                    <AlternateAuthMeth />

                    <TermsOfService />

                </View>
            </View>

        </Background>
    );
};

export default AuthScreen;


//* Components


const HeaderImg = () => {
    return (
        <ImageBackground
            source={require('../assets/img/zomato_auth_img.png')}
            style={{

                flex: 2
            }} />
    );
};

const Title = () => {
    return (
        <Text
            style={{
                color: secondary,
                margin: 8,
                fontSize: 22,
                fontWeight: "bold",
                flexWrap: "wrap",
                width: "80%",
                alignSelf: "center",
                textAlign: "center"
            }}
        >India's #1 Food Delivery and Dining App</Text>
    );
};

const PhInputField = () => {
    return (
        <View
            style={{
                width: "100%",
                flexDirection: "row",
            }}>

            <View
                style={{
                    borderColor: lightGrey,
                    height: 46,
                    width: 62,
                    borderWidth: 1.4,
                    borderRadius: 6,
                    flexDirection: "row",
                    marginVertical: 4,
                    alignItems: "center",
                    justifyContent: "center"

                }}>
                <View
                    style={{
                        height: 20,
                        width: 30,
                    }}>
                    <ImageBackground
                        source={require('../assets/flags/india_flag.png')} style={{
                            height: '90%',
                            width: "90%",
                            alignSelf: "center",
                        }} />
                </View>
                <View
                    style={{
                        height: 16,
                        width: 16,
                    }}>
                    <ImageBackground
                        source={require('../assets/icons/dropdown.png')} style={{

                            height: '90%',
                            width: "90%",
                            alignSelf: "center",
                        }} />
                </View>

            </View>


            <View
                style={{
                    borderColor: lightGrey,
                    height: 46,
                    borderWidth: 1.4,
                    borderRadius: 6,
                    color: "green",
                    paddingHorizontal: 6,
                    flexDirection: "row",
                    margin: 4,

                }}>
                <Text
                    style={{
                        textAlign: "center",
                        alignSelf: "center",
                        fontWeight: "500",
                        color: secondary
                    }}
                >+91</Text>
                <TextInput
                    placeholder='Enter phone Number'
                    placeholderTextColor={grey}

                    style={{
                        color: dark,
                        backgroundColor: '#fff',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginVertical: 2,
                        width: "76%",
                    }} >
                </TextInput >
            </View>
        </View>
    );
};

const ContinueBtn = (props) => {
    return (
        <TouchableOpacity
            {...props}
            style={{
                alignItems: 'center',
                paddingVertical: 6,
                marginVertical: 6,
                height: 46,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
                backgroundColor: primary,

            }}

        >
            <Text
                style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: "bold"
                }}> Continue</Text>

        </TouchableOpacity>
    );
};

const AlternateAuthMeth = () => {
    return (
        <View
            style={{
                marginVertical: 10,
                flexDirection: "row",
                justifyContent: "center",
            }}>

            <TouchableOpacity

                style={{
                    alignItems: 'center',
                    padding: 12,
                    margin: 12,
                    height: 46,
                    width: 46,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    borderColor: lightGrey,
                    borderRadius: 99,
                    borderWidth: 1,

                }}
            // onPress={}
            >
                <ImageBackground
                    source={require('../assets/icons/google_logo.png')}
                    style={{
                        height: '100%',
                        width: "100%",
                        alignSelf: "center",
                    }} />

            </TouchableOpacity>

            <TouchableOpacity

                style={{
                    alignItems: 'center',
                    padding: 12,
                    margin: 12,
                    height: 46,
                    width: 46,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    borderColor: lightGrey,
                    borderRadius: 99,
                    borderWidth: 1,

                }}
            // onPress={}
            >
                <ImageBackground
                    source={require('../assets/icons/viewmore.png')} style={{
                        height: '100%',
                        width: "100%",
                        alignSelf: "center",
                    }} />

            </TouchableOpacity>

        </View>
    );
};

const TermsOfService = () => {
    return (
        <View>
            <Text
                style={{
                    color: darkGrey,
                    fontSize: 12,
                    alignSelf: "center",
                    textAlign: "center"
                }}
            >By continuing, you agree to our
            </Text>
            <Text
                style={{
                    color: darkGrey,
                    fontSize: 12,
                    alignSelf: "center",
                    textAlign: "center",
                    borderStyle: "dotted",
                    borderBottomWidth: 1,
                    borderColor: darkGrey,

                }}
            >Terms of Service Privacy Policy Content Policy
            </Text>
        </View>
    );
};

const OverlayBtn = ({ x, y, label, handler }) => {
    return (
        <TouchableOpacity
            style={{
                width: 100,
                height: 200,
                backgroundColor: "green"
            }}>
            <Text>hello</Text>
        </TouchableOpacity>
    );
};