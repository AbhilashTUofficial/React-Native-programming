import { View, Dimensions } from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import Header from '../Components/Header';
import CustomBtn from '../Components/CustomBtn';
import GoBackBtn from '../Components/GoBackBtn';
import VerifyOTP from '../Components/VarifyOTP';
import HeaderImg from '../Components/HeaderImg';

const EnterOTPScreen = (props) => {
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
                    }} />
                <View
                    style={{
                        flex: 8,
                    }}>
                    <HeaderImg
                        source={require('../assets/img/img_4.jpg')}
                    />

                </View>
                <View
                    style={{
                        flex: 12,
                    }}>
                    <Header
                        title={"Enter OTP"}
                        subtitle={"A 4 digit code has been sent to +91 90837 87321"} />

                    <VerifyOTP />

                    <CustomBtn
                        label={"Submit"}
                        btnHandler={() => props.navigation.navigate("resetpassword")} />
                </View>

            </View>

            <GoBackBtn
                btnHandler={() => props.navigation.goBack()} />

        </Background>
    );
};

export default EnterOTPScreen;