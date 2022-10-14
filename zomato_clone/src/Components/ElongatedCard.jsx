import React, { Component, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { secondary } from '../constants';


class ElongatedCard extends Component {
    render() {
        // const [like, setLike] = useState(false);
        return (
            <View
                style={{
                    marginHorizontal: 12,
                    marginVertical: 6,
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
                        height: 180,
                        width: 120,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <View
                        style={{
                            alignItems: 'center',
                            flex: 1,
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",

                        }}>
                        <Image
                            source={this.props.item.img}
                            style={{
                                borderTopRightRadius: 12,
                                borderTopLeftRadius: 12,
                                height: '100%',
                                width: "100%",
                                alignSelf: "center",
                            }} />
                        <TouchableOpacity
                            style={{
                                width: 24,
                                height: 24,
                                padding: 4,
                                borderRadius: 99,
                                backgroundColor: "white",
                                position: "absolute",
                                alignItems: "center",
                                top: 6,
                                right: 6
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
                            flex: 1,
                            width: "100%",
                            alignItems: "flex-start",
                            paddingTop: 6,
                            paddingLeft: 6,
                            paddingRight: 6,
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
                                }}>{this.props.item.storeName}</Text>
                            <View
                                style={this.props.item.ratting > "4" ? {
                                    height: 16,
                                    width: 28,
                                    borderRadius: 4,
                                    backgroundColor: "green",
                                    alignItems: "center"

                                } : this.props.item.ratting > "3" ? {
                                    height: 16,
                                    width: 28,
                                    borderRadius: 4,
                                    backgroundColor: "gold",
                                    alignItems: "center"

                                } : {
                                    height: 16,
                                    width: 34,
                                    borderRadius: 4,
                                    backgroundColor: "red",
                                    alignItems: "center"

                                }
                                }>

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
                                        }}>{this.props.item.ratting}</Text>
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


                        <Text>{this.props.item.travelTime}</Text>
                        <Text>{this.props.item.cost}</Text>


                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

export default ElongatedCard;