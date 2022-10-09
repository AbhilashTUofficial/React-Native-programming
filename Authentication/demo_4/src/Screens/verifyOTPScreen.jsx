import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import Header from '../Components/Header';
import InputField from '../Components/InputField';
import CustomBtn from '../Components/CustomBtn';
import GoBackBtn from '../Components/GoBackBtn';
import VerifyOTP from '../Components/VarifyOTP';
import HeaderImg from '../Components/HeaderImg';

const EnterOTPScreen = (props) => {
    return (
        <Background>

            <HeaderImg
                source={require('../assets/img/img_4.jpg')}
            />

            <GoBackBtn
                btnHandler={() => props.navigation.goBack()} />


            <Header
                title={"Enter OTP"}
                subtitle={"A 4 digit code has been sent to +91 90837 87321"} />

            <VerifyOTP />

            <CustomBtn
                label={"Submit"}
                btnHandler={() => props.navigation.navigate("resetpassword")} />

        </Background>
    );
};

export default EnterOTPScreen;