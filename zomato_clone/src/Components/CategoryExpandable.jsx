import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { darkGrey, lightGrey, primary, secondary } from '../constants';

const CatergoryExpandable = (props) => {

    return (
        <View>
            {
                props.categories.map((category) => {
                    return (
                        <ItemView catagory={category} />
                    );
                })
            }
        </View>
    );
};

export default CatergoryExpandable;

const ItemView = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white",
                paddingVertical: 8,
            }}>
            <TouchableOpacity
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 16,
                    paddingVertical: 12
                }}
                onPress={() => {
                    setIsExpanded(!isExpanded);
                }}>
                <Text
                    style={{
                        color: secondary,
                        fontSize: 18,
                        fontWeight: "500"
                    }} >{props.catagory.title} ({props.catagory.items.length})</Text>

                <View
                    style={{
                        height: 18,
                        width: 18,
                        marginRight: 2
                    }}>
                    <Image
                        source={
                            isExpanded ? require('../assets/icons/dropdown3.png') : require('../assets/icons/dropdown3.1.png')
                        }
                        style={{
                            height: '100%',
                            width: "100%",
                            alignSelf: "center",
                        }} />
                </View>
            </TouchableOpacity>


            <ExpandableView
                expanded={isExpanded}
                items={props.catagory.items}
            />
        </View>
    );
};


const ExpandableView = ({ expanded = false, items }) => {
    const [height] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(height, {
            toValue: !expanded ? 140 : 0,
            duration: 100,
            useNativeDriver: false
        }).start();
    }, [expanded, height]);
    // console.log(items);
    return (
        <Animated.View
            style={{
                height,
                backgroundColor: "white",
                borderColor: "transparent",
                borderBottomColor: lightGrey,
                borderWidth: 1,
            }}>
            {
                !expanded ?
                    items.map((i) => {
                        return (
                            <View
                                style={{
                                    marginTop: 4,
                                    marginBottom: 8,
                                    marginHorizontal: 16

                                }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "flex-end"
                                    }}>
                                    <View
                                        style={{
                                            justifyContent: "space-between",
                                            height: 46
                                        }}>
                                        <Text>
                                            bestseller
                                        </Text>
                                        <Text
                                            style={{
                                                color: secondary,
                                                fontSize: 16,
                                                fontWeight: "500",

                                            }}>
                                            {i.itemTitle}
                                        </Text>

                                    </View>
                                    <AddBtn />
                                </View>
                            </View>
                        );
                    }) : null
            }


        </Animated.View>
    );
};

const AddBtn = () => {
    return (
        <TouchableOpacity
            style={{
                margin: 2,
                backgroundColor: "#FFF7FA",
                height: 32,
                width: 108,
                borderWidth: 0.6,
                borderColor: primary,
                borderRadius: 4,
                alignItems: "center",
                justifyContent: "center"
            }}>
            <Text
                style={{
                    alignSelf: "center",
                    fontWeight: 'bold',
                    color: primary,

                }}
            >ADD</Text>
        </TouchableOpacity>
    );
};