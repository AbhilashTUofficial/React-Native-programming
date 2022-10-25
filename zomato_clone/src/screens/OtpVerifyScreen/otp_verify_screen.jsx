import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Background from '../../Components/Background';
import { commonStyles } from '../common_styles';
import { otpStyles, prevIcon } from './otp_verify_styles';

const OTPVerifyScreen = (props) => {
    i = 0;
    otp = ["", "", "", "", "", ""];
    return (
        <Background>

            <View style={[commonStyles.container, { paddingVertical: 100, alignItems: "center" }]}>

                <View>

                    <Text style={otpStyles.phPrompt}>
                        We have sent a verification code to</Text>

                    <Text style={otpStyles.ph}>
                        +91 8921350228</Text>

                </View>

                <View style={otpStyles.container}>

                    {
                        otp.map((n) => {
                            i++;
                            return (

                                <View key={i} style={otpStyles.tile}>

                                    <TextInput
                                        autoFocus={false}
                                        maxLength={1}
                                        keyboardType={"number-pad"}
                                        style={otpStyles.tileText}>
                                        {n}</TextInput>

                                </View>
                            );

                        })
                    }

                </View>

                <View style={otpStyles.aligncenter}>

                    <CustomBtn label={"Resend SMS"} />

                    <CustomBtn label={"Call me"} />

                </View>

                <Text style={otpStyles.altLogMeth}>
                    Try other login methods</Text>

            </View>


            <PreviousScreen
                source={prevIcon}
                onPress={() => props.navigation.goBack()} />

        </Background>
    );
};

export default OTPVerifyScreen;


const PreviousScreen = (props) => {
    return (

        <TouchableOpacity {...props} style={otpStyles.prevScr}>

            <Image {...props} style={otpStyles.prevScrIcon} />

            <Text style={otpStyles.prevScrText}>
                OTP Verification</Text>

        </TouchableOpacity>

    );
};

const CustomBtn = ({ label }) => {
    return (

        <TouchableOpacity style={otpStyles.btn}>

            <Text style={otpStyles.btnText}>
                {label}</Text>

        </TouchableOpacity>
    );
};

