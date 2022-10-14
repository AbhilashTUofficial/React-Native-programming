import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { secondary } from '../constants';


class CircularCard extends Component {
    render() {
        return (
            <View
                style={{
                    marginLeft: 4,
                    alignItems: "center",
                }}>

                <TouchableOpacity

                    style={{
                        alignItems: 'center',
                        marginHorizontal: 12,
                        marginVertical: 6,
                        height: 72,
                        width: 72,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 99,

                    }}
                // onPress={}
                >
                    <Image
                        // {...this.props}
                        source={this.props.foodtype.img}
                        style={{
                            height: '100%',
                            width: "100%",
                            alignSelf: "center",
                        }} />

                </TouchableOpacity>
                <Text
                    style={{
                        fontWeight: '500',
                        color: secondary
                    }}>
                    {this.props.foodtype.text}
                </Text>
            </View>
        );
    }

}

export default CircularCard;