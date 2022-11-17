import { Dimensions, View } from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import Header from '../Components/Header';
import InputField from '../Components/InputField';
import CustomBtn from '../Components/CustomBtn';
import GoBackBtn from '../Components/GoBackBtn';
import HeaderImg from '../Components/HeaderImg';

const ForgotPasswordScreen = (props) => {
    return (
        <Background>
            <View
                style={{
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height,
                    justifyContent: "space-between",
                }}>
                <View
                    style={{
                        flex: 1,
                    }} >

                </View>
                <View
                    style={{
                        flex: 8,
                    }}>
                    <HeaderImg
                        source={require('../assets/img/img_3.jpg')} />

                </View>
                <View
                    style={{
                        flex: 12,
                    }}>

                    <Header
                        title={"Forgot Password?"}
                        subtitle={"Don't worry! It happens. Please enter the address associated with your account "} />

                    <InputField
                        placeholder={"Email ID / Mobile number"}
                        source={require('../assets/icons/a_email.png')}
                    />

                    <View
                        style={{ height: 30 }} />

                    <CustomBtn
                        label={"Submit"}
                        btnHandler={() => props.navigation.navigate("enterotp")} />

                </View>
            </View>

            <GoBackBtn
                btnHandler={() => props.navigation.goBack()} />
        </Background>
    );
};

export default ForgotPasswordScreen;