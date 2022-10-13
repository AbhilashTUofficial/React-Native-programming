import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { lightGrey, secondary } from '../constants';

const StickyHeader = () => {
    return (
        <View
            style={{
                backgroundColor: "white",
            }}>
            <SearchBar />
            <CategoryTabs />

        </View>
    );
};

export default StickyHeader;


const SearchBar = () => {
    return (
        <View
            style={{
                height: 40,
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 16,
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 12,
                borderColor: lightGrey,
                backgroundColor: "#F6F6F6",
                marginVertical: 10,
                marginHorizontal: 16
            }}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                <View
                    style={{
                        width: 26,
                        height: 26,
                        marginVertical: 6,
                    }}>

                    <ImageBackground
                        source={require('../assets/icons/search.png')}
                        style={{
                            height: '100%',
                            width: "100%",
                            alignSelf: "center",
                        }} />
                </View>
                <Text
                    style={{
                        marginHorizontal: 8,
                    }}>Restaurant name or a dish name</Text>
            </View >

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                <View
                    style={{
                        backgroundColor: lightGrey,
                        width: 2,
                        height: 28,
                        marginHorizontal: 6
                    }}>

                </View>
                <View
                    style={{
                        width: 26,
                        height: 26,
                        marginVertical: 6,
                    }}>

                    <ImageBackground
                        source={require('../assets/icons/mic.png')}
                        style={{
                            height: '100%',
                            width: "100%",
                            alignSelf: "center",
                        }} />
                </View>
            </View>



        </View>
    );
};

const CategoryTabs = () => {
    components = [
        <Tab label={"Sort"} trailing={true} leading={true} />,
        <Tab label={"Fast Delivery"} />,
        <Tab label={"Rating 4.0+"} />,
        <Tab label={"Cuisines"} trailing={true} />,
        <Tab label={"More"} trailing={true} />,
    ];
    return (
        <View
            style={{
                paddingHorizontal: 16,
                marginVertical: 10


            }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    components.map((component) => {
                        return (
                            <View key={""}>
                                {component}
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
};

const Tab = ({ leading, label, trailing }) => {
    return (

        <TouchableOpacity
            style={{
                height: 24,
                margin: 6,
                elevation: 3,
                borderRadius: 6,
                shadowColor: secondary,
                shadowOffset: { height: 4, width: 4 },
                shadowOpacity: 1,
                shadowRadius: 1,
                paddingHorizontal: 12,
                paddingVertical: 2,
                backgroundColor: "white",
                flexDirection: "row",
                alignItems: "center"

            }}>

            {
                leading ? <View
                    style={{
                        height: 12,
                        width: 10,
                        marginRight: 4
                    }}>
                    <ImageBackground
                        source={require('../assets/icons/sort.png')} style={{

                            height: '100%',
                            width: "100%",
                            alignSelf: "center",
                        }} />
                </View> : null
            }

            <Text
                style={{
                    color: secondary
                }}>{label}</Text>
            {
                trailing ? <View
                    style={{
                        height: 12,
                        width: 10,
                        marginLeft: 4
                    }}>
                    <ImageBackground
                        source={require('../assets/icons/dropdown3.png')} style={{

                            height: '100%',
                            width: "100%",
                            alignSelf: "center",
                        }} />
                </View> : null
            }
        </TouchableOpacity>
    );
};