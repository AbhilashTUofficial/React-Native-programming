import { Dimensions, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { lightGrey, secondary } from '../constants';


const Header = () => {
    return (
        <View
            style={{

                height: 46,
                width: Dimensions.get("screen").width,
                justifyContent: "space-between",
                paddingHorizontal: 16,
                flexDirection: "row",
                marginTop: 16,

            }}>

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                <View
                    style={{
                        width: 26,
                        height: 26,
                        margin: 6,
                    }}>

                    <ImageBackground
                        source={require('../assets/icons/location.png')}
                        style={{
                            height: '100%',
                            width: "100%",
                            alignSelf: "center",
                        }} />
                </View>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: secondary,
                        letterSpacing: 1,
                    }}
                >Location</Text>
                <View
                    style={{
                        height: 20,
                        width: 20,
                        marginTop: 6,
                        marginLeft: 6,
                        justifyContent: "center"
                    }}>
                    <ImageBackground
                        source={require('../assets/icons/dropdown2.png')} style={{

                            height: '90%',
                            width: "90%",
                            alignSelf: "center",
                        }} />
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                <TouchableOpacity
                    style={{
                        width: 36,
                        height: 36,
                        margin: 6,
                        elevation: 6,
                        borderRadius: 6,
                        shadowColor: secondary,
                        shadowOffset: { height: 4, width: 4 },
                        shadowOpacity: 1,
                        shadowRadius: 1,
                        padding: 8,
                        backgroundColor: "white"

                    }}>

                    <ImageBackground
                        source={require('../assets/icons/language.png')}
                        style={{
                            height: '100%',
                            width: "100%",
                            alignSelf: "center",
                        }} />
                </TouchableOpacity>
                <View
                    style={{
                        borderRadius: 30
                    }}>
                    <TouchableOpacity
                        style={{
                            width: 36,
                            height: 36,
                            margin: 6,
                            backgroundColor: lightGrey,
                            borderRadius: 90

                        }}>

                        <ImageBackground
                            source={require('../assets/icons/profile.png')}
                            style={{
                                height: '100%',
                                width: "100%",
                                alignSelf: "center",
                            }} />
                    </TouchableOpacity>
                </View>

            </View>


        </View>
    );
};

export default Header;