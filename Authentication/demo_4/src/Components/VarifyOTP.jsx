import React from 'react';
import { TextInput, View } from 'react-native';
import { dark } from '../constants';

export default function VerifyOTP({ props }) {
    otp = [0, 0, 0, 0];
    i = 0;
    return (
        <View
            style={{
                alignItems: "center",
                alignSelf: "center",
                flexDirection: "row",
                width: "80%",
                justifyContent: "space-evenly",
                marginVertical: 16,
            }}>
            {
                otp.map((n) => {
                    i++;
                    return (
                        <View
                            key={i}
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 6,
                                backgroundColor: "#f1f5f6",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                            <TextInput
                                autoFocus
                                maxLength={1}
                                keyboardType={"number-pad"}
                                style={{

                                    fontSize: 32,
                                    fontWeight: "600",
                                    color: dark,
                                }}
                            >{n}</TextInput>
                        </View>
                    );

                })}
        </View>
    );
}