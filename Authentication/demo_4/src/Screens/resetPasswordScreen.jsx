import { View, Dimensions } from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import Header from '../Components/Header';
import InputField from '../Components/InputField';
import CustomBtn from '../Components/CustomBtn';
import GoBackBtn from '../Components/GoBackBtn';
import HeaderImg from '../Components/HeaderImg';

const ResetPasswordScreen = (props) => {
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
                    <HeaderImg source={require('../assets/img/img_5.jpg')} />

                </View>
                <View
                    style={{
                        flex: 12,
                    }}>
                    <Header title={"Reset Password?"}
                    />
                    <InputField placeholder={"New password"}
                        source={require('../assets/icons/lock.png')}
                        secureTextEntry={true}

                    />
                    <InputField placeholder={"Confirm New password"}
                        source={require('../assets/icons/lock.png')}
                        secureTextEntry={true}
                    />
                    <CustomBtn label={"Submit"} />

                </View>
            </View>
            <GoBackBtn btnHandler={() => props.navigation.goBack()} />

        </Background>
    );
};

export default ResetPasswordScreen;