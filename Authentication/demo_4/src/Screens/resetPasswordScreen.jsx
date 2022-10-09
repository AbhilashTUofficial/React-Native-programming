import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import Header from '../Components/Header';
import InputField from '../Components/InputField';
import CustomBtn from '../Components/CustomBtn';
import { dark, grey, primary } from '../constants';
import Divider from 'react-native-divider';
import GoogleBtn from '../Components/GoogleBtn';
import GoBackBtn from '../Components/GoBackBtn';
import HeaderImg from '../Components/HeaderImg';

const ResetPasswordScreen = (props) => {
    return (
        <Background>

            <HeaderImg source={require('../assets/img/img_5.jpg')} />

            <GoBackBtn btnHandler={() => props.navigation.goBack()} />

            <Header title={"Reset Password?"}
            />
            <InputField placeholder={"New password"}
                source={require('../assets/icons/lock.png')}
            />
            <InputField placeholder={"Confirm New password"}
                source={require('../assets/icons/lock.png')}
            />



            <CustomBtn label={"Submit"} />


        </Background>
    );
};

export default ResetPasswordScreen;