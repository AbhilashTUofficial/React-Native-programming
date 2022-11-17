import { Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import InputField from '../Components/InputField';
import CustomBtn from '../Components/CustomBtn';
import { assentColor, primary } from '../constants';
import Background from '../Components/Background';
import Icon from 'react-native-vector-icons/FontAwesome5';


const ForgotPasswordScreen = (props) => {
    return (
        <Background>

            <TouchableOpacity style={{
                backgroundColor: assentColor,
                width: 36,
                height: 36,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
            }}
                onPress={() => props.navigation.goBack()}

            >
                <Icon
                    name="chevron-left"
                    size={18}
                    color={primary}
                ></Icon>


            </TouchableOpacity>

            <ImageBackground
                source={require('../assets/img/lock_logo.png')}
                style={{
                    height: '86%',
                    width: "80%",
                    alignSelf: "center"
                }}
            />
            <Header title={"Forgot Password?"}
                subtitle={"Enter your email address to receive a verification code"} />
            <InputField placeholder={"Email"} />
            <CustomBtn label={"Send"} />
            <TouchableOpacity
                style={{


                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    width: "80%",
                    height: "10%"



                }}
                onPress={() => props.navigation.navigate("login")}>
                <Text style={{ color: primary }}>
                    Back to login
                </Text>
            </TouchableOpacity>


        </Background>
    );
};

export default ForgotPasswordScreen;