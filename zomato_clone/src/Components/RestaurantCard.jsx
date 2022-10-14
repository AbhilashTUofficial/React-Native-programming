import React, { Component, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { secondary } from '../constants';


class RestaurantCard extends Component {
    render() {
        // const [like, setLike] = useState(false);
        return (
            <View
                style={{
                    marginHorizontal: 12,
                    marginVertical: 12,
                    borderRadius: 18,
                    backgroundColor: "white",
                    elevation: 4,
                    borderRadius: 12,
                    shadowColor: secondary,
                    shadowOffset: { height: 3, width: 3 },
                    shadowOpacity: 1,
                    shadowRadius: 1,
                }}>

                <TouchableOpacity

                    style={{
                        alignItems: 'center',
                        height: 280,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <View
                        style={{
                            alignItems: 'center',
                            flex: 5,
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",

                        }}>
                        <Image
                            source={this.props.store.img}
                            style={{
                                borderTopRightRadius: 12,
                                borderTopLeftRadius: 12,
                                height: '100%',
                                width: "100%",
                                alignSelf: "center",
                            }} />
                        <TouchableOpacity
                            style={{
                                width: 32,
                                height: 32,
                                padding: 8,
                                borderRadius: 99,
                                backgroundColor: "white",
                                position: "absolute",
                                alignItems: "center",
                                top: 16,
                                right: 16
                            }}>
                            <Image
                                source={require('../assets/icons/heart_inactive.png')}
                                style={{
                                    height: '100%',
                                    width: "100%",
                                    alignSelf: "center",
                                }} />

                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            flex: 2,
                            width: "100%",
                            alignItems: "flex-start",
                            paddingTop: 6,
                            paddingLeft: 12,
                            paddingRight: 12,
                        }}>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%"
                            }}>
                            <Text
                                style={{
                                    color: secondary,
                                    fontWeight: "500",
                                    marginVertical: 2,
                                    fontSize: 20,
                                }}>{this.props.store.storeName}</Text>
                            <View
                                style={this.props.store.ratting > "4" ? {
                                    height: 16,
                                    width: 28,
                                    borderRadius: 4,
                                    backgroundColor: "green",
                                    alignItems: "center"

                                } : this.props.store.ratting > "3" ? {
                                    height: 16,
                                    width: 28,
                                    borderRadius: 4,
                                    backgroundColor: "gold",
                                    alignItems: "center"

                                } : {
                                    height: 16,
                                    width: 28,
                                    borderRadius: 4,
                                    backgroundColor: "red",
                                    alignItems: "center"
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: "center",
                                        justifyContent: "space-evenly",
                                        width: "100%"
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            fontWeight: "bold",
                                            color: "white",
                                        }}>{this.props.store.ratting}</Text>
                                    <View
                                        style={{
                                            width: 10,
                                            height: 10
                                        }}>
                                        <Image
                                            source={require('../assets/icons/star.png')}
                                            style={{
                                                height: '100%',
                                                width: "100%",
                                                alignSelf: "center",
                                            }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%"
                            }}>
                            <Text>{this.props.store.items}</Text>
                            <Text>{this.props.store.cost}</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default RestaurantCard;