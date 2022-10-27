import { Animated, Dimensions, Image, RefreshControl, ScrollView, StatusBar, Text, TouchableHighlightBase, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import { darkGrey, lightGrey, primary, secondary } from '../constants';
import RestaurantDetails from '../Components/RestaurantDetails';
import Header from '../Components/RestaurantHeader';



const VegNonVeg = () => {
    const [vegSelected, setVeg] = useState(false);
    const [nonVegSelected, setNonVeg] = useState(false);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#F6F5FA",
                height: 56,
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: 'row'
            }}>
            <TouchableOpacity
                style={{
                    height: 32,
                    width: vegSelected ? 78 : 66,
                    marginLeft: 16,
                    marginBottom: 12,
                    marginTop: 2,
                    elevation: 3,
                    borderRadius: 6,
                    shadowColor: secondary,
                    shadowOffset: { height: 4, width: 4 },
                    shadowOpacity: 1,
                    shadowRadius: 1,
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    backgroundColor: "white",
                    flexDirection: "row",
                    alignItems: "center"

                }}
                onPress={() => { setVeg(!vegSelected); }}>

                <View
                    style={{
                        height: 22,
                        width: 22,
                        marginRight: 2
                    }}>
                    <Image
                        source={require('../assets/icons/vegicon.png')} style={{

                            height: '100%',
                            width: "100%",
                            alignSelf: "center",
                        }} />
                </View>

                <Text
                    style={{
                        color: secondary
                    }}>Veg</Text>
                {
                    vegSelected ? <View
                        style={{
                            height: 12,
                            width: 10,
                            marginLeft: 4
                        }}>
                        <Image
                            source={require('../assets/icons/cancel.png')} style={{

                                height: '100%',
                                width: "100%",
                                alignSelf: "center",
                            }} />
                    </View> : null
                }
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    height: 32,
                    width: nonVegSelected ? 104 : 92,
                    marginLeft: 16,
                    marginBottom: 12,
                    marginTop: 2,
                    elevation: 3,
                    borderRadius: 6,
                    shadowColor: secondary,
                    shadowOffset: { height: 4, width: 4 },
                    shadowOpacity: 1,
                    shadowRadius: 1,
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    backgroundColor: "white",
                    flexDirection: "row",
                    alignItems: "center"

                }}
                onPress={() => { setNonVeg(!nonVegSelected); }}>

                <View
                    style={{
                        height: 22,
                        width: 22,
                        marginRight: 2
                    }}>
                    <Image
                        source={require('../assets/icons/nonvegicon.png')} style={{

                            height: '100%',
                            width: "100%",
                            alignSelf: "center",
                        }} />
                </View>

                <Text
                    style={{
                        color: secondary
                    }}>Non-veg</Text>
                {
                    nonVegSelected ? <View
                        style={{
                            height: 12,
                            width: 10,
                            marginLeft: 4
                        }}>
                        <Image
                            source={require('../assets/icons/cancel.png')} style={{

                                height: '100%',
                                width: "100%",
                                alignSelf: "center",
                            }} />
                    </View> : null
                }
            </TouchableOpacity>
        </View>
    );
};


export default VegNonVeg;
